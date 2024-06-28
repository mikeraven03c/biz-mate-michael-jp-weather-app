<?php

namespace App\DataTransferObject;

use Spatie\LaravelData\Data;

class PlaceForecastData extends Data
{
    public function __construct(
        public string $city,
        public string $fsq_id,
        public string $latitude,
        public string $longitude,
    ) {
    }
}
