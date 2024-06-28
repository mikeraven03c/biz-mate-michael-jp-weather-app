<?php

namespace App\DataTransferObject;

use Spatie\LaravelData\Data;

class VenueData extends Data
{
    public function __construct(
        public string $city,
        // public string $categories = '10035',
        public string $categories = '16020',
        public string $code = 'JP',
        public int $limit = 5
    )
    {
    }
}
