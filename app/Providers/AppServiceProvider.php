<?php

namespace App\Providers;

use App\Interfaces\VenueInterface;
use Illuminate\Contracts\Foundation\Application;
use App\Interfaces\WeatherInterface;
use App\Services\FourSquareService;
use App\Services\WeatherMapService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(WeatherInterface::class, function () {
            $config = config('services.open_weather_map');

            return new WeatherMapService(
                $config['url'],
                $config['app_id']
            );
        });

        $this->app->bind(VenueInterface::class, function () {
            $config = config('services.four_square');

            return new FourSquareService(
                $config['url'],
                $config['app_key']
            );
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
