<?php

namespace App\Services;

class ApiService
{
    public function __construct(
        public string $url,
        public string $appId
    )
    {
    }
}
