<?php

use App\Http\Controllers\ForecastController;
use App\Http\Controllers\VenueController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('app');
});

Route::prefix('api')->group(function () {
    Route::get('/forecast/{city}', [ForecastController::class, 'forecast']);
    Route::get('/venue/{city}', [VenueController::class, 'venue']);
    Route::get('/forecast/{city}/{fsqid}/{latitude}/{longitude}', [ForecastController::class, 'placeForecast']);
});
