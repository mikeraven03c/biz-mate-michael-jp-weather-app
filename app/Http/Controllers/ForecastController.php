<?php

namespace App\Http\Controllers;

use App\DataTransferObject\ForecastData;
use App\DataTransferObject\PlaceForecastData;
use App\Interfaces\WeatherInterface;

class ForecastController
{
    public function __construct(public WeatherInterface $weatherService)
    {
    }


    /**
     * @param string $city - name of city
     */
    public function forecast(string $city) : mixed
    {
        $code = ucfirst(strtolower($city));
        $result = $this->weatherService->getForecast(new ForecastData($code));

        return $result;
    }

    /**
     * @param string $city - name of city
     * @param string $fsqid - unique id of foursquare location
     * @param string $latitude - longitude coordinates
     * @param string $longitude - longitude coordinates
     */
    public function placeForecast(
        string $city,
        string $fsqid,
        string $latitude,
        string $longitude,
    ) : mixed
    {
        $city = ucfirst(strtolower($city));

        $result = $this->weatherService->getPlaceForecast(
            new PlaceForecastData(
                city: $city,
                fsq_id: $fsqid,
                latitude: $latitude,
                longitude: $longitude
            )
        );

        return $result;
    }
}
