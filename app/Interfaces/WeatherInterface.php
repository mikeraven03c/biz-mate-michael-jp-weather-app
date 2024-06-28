<?php

namespace App\Interfaces;

use App\DataTransferObject\ForecastData;
use App\DataTransferObject\PlaceForecastData;

interface WeatherInterface
{
    /**
     * @param \App\DataTransferObject\ForecastData $forecastData - contains country and code
     * @return array return result of forecast
     */
    public function getForecast(ForecastData $forecastData);

    /**
     * @param \App\DataTransferObject\PlaceForecastData $placeForecastData - contains latitude and longitude
     * @return array return result of forecast
     */
    public function getPlaceForecast(PlaceForecastData $placeForecastData);
}
