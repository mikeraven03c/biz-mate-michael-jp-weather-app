<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'open_weather_map' => [
        'url' => env('OPEN_WEATHER_MAP_URL', 'https://api.openweathermap.org/data/2.5/forecast'),
        'app_id' => env('OPEN_WEATHER_MAP_APP_ID'),
    ],

    'four_square' => [
        'url' => env('FOURSQUARE_URL', 'https://api.foursquare.com/v3/places/search'),
        'app_key' => env('FOURSQUARE_APP_KEY'),
    ]
];
