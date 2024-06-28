<?php

namespace App\Services;

use Exception;
use App\Models\Forecast;
use App\Models\PlaceForecast;
use App\Interfaces\WeatherInterface;
use Illuminate\Support\Facades\Http;
use App\Actions\IsNonApiServiceCache;
use App\DataTransferObject\ForecastData;
use App\DataTransferObject\PlaceForecastData;

class WeatherMapService extends ApiService implements WeatherInterface
{
    const CITY_FORECAST = 0;
    const PLACE_FORECAST = 1;

    protected function fetch(array $params)
    {
        $response = Http::get($this->url, array_merge([
            'APPID' => $this->appId,
            // 'cnt' => 20
        ], $params));

        if ($response->successful()) {
            return $response->json();
        }

        throw new Exception('There is error using OpenWeatherMap API. ');
    }

    /**
     *
     *  @param $param1 - city | latitude
     *  @param $param2 - country | longitude
     *
     */
    protected function get(
        string $param1,
        string $param2 = 'JP',
        int $type = self::CITY_FORECAST
    ) {
        if (self::CITY_FORECAST == $type) {
            $params = [
                'q' => $param1 . ',' . $param2,
            ];
        } else {
            $params = [
                'lat' => $param1,
                'lon' => $param2
            ];
        }

        return $this->fetch($params);
    }

    /**
     * fetch forecast data
     * @param ForecastData $forecastData
     * @return mixed jsonData
     */
    public function getForecast(ForecastData $forecastData): mixed
    {
        if ((new IsNonApiServiceCache)()) {
            return $this->get($forecastData->city);
        }

        $forecast = Forecast::country($forecastData->city, $forecastData->code)
            ->first();

        if ($forecast) {
            if ($this->updateHoursAgo($forecast)) {
                return  $forecast->content;
            } else {
                $result = $this->get($forecastData->city);
                $forecast->content = $result;
                $forecast->save();
            }
        } else {
            $result = $this->get($forecastData->city);
            $forecast = Forecast::create([
                'country' => $forecastData->city,
                'code' => $forecastData->code,
                'content' => $result
            ]);
        }

        return $result;
    }

    /**
     * Helps detect if forecast is recently updated
     * @param App\Models\Forecast\ForeCast $forecast
     */
    private function updateHoursAgo(Forecast|PlaceForecast $forecast)
    {
        $threeHoursAgo = now()->subHours(3);

        return $forecast->updated_at > $threeHoursAgo;
    }

    public function getPlaceForecast(PlaceForecastData $data)
    {
        if ((new IsNonApiServiceCache)()) {
            return $this->get(
                $data->latitude,
                $data->longitude,
                self::PLACE_FORECAST
            );
        }
        $forecast = PlaceForecast::where('fsq_id', $data->fsq_id)
            ->first();

        if ($forecast) {
            if ($this->updateHoursAgo($forecast)) {
                return  $forecast->content;
            } else {
                $result = $this->get(
                    $data->latitude,
                    $data->longitude,
                    self::PLACE_FORECAST
                );

                $forecast->content = $result;
                $forecast->save();
            }
        } else {
            $result = $this->get(
                $data->latitude,
                $data->longitude,
                self::PLACE_FORECAST
            );

            PlaceForecast::create([
                'city' => $data->city,
                'fsq_id' => $data->fsq_id,
                'latitude' => $data->latitude,
                'longitude' => $data->longitude,
                'content' => $result
            ]);
        }

        return $result;
    }
}
