<?php

namespace App\Actions;

class IsNonApiServiceCache
{
    public function __invoke() : bool
    {
        return !config('cache.api_services');
    }
}
