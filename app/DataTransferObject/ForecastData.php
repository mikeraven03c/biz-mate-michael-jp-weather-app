<?php

namespace App\DataTransferObject;

use Spatie\LaravelData\Data;

class ForecastData extends Data
{
    public function __construct(
        public string $city,
        public string $code = 'JP',
    ) {
    }
}
