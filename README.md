## Japan Weather App
Author: John Michael Romero

## Setup and configuration

Framework used:
- Laravel

Environment:
- Open Weather Map Integration
OPEN_WEATHER_MAP_URL=https://api.openweathermap.org/data/2.5/forecast
OPEN_WEATHER_MAP_APP_ID= // Put your Open Weather Map App key here

- Foursquare Place API Integration
FOURSQUARE_URL=https://api.foursquare.com/v3/places/search
FOURSQUARE_APP_KEY= // Put your Foursquare App key here

all listed on config > services

- Database Cache for services(Fourplace, Open Weathermap), improve performance and prevent multiple calls to specified thirt party integration.
- Set to true to enable caching or default false
API_SERVICES_CACHE=false

Required to run:
- composer install
- php artisan migrate

Front end:
- Quasar
- Vite

There is no requirement to build and run the server for front-end and it is already embedded to Laravel through vite.

## Back-End

Follows MVC And Service based Approach

Folder explanation
- Actions - contains invokable class to be reusable through out on App
- DataTransferObject - contains Data Object type file.
- Interfaces - constains interaces to be used on binding of services
- Services - contains services that can be used throught an app

## Front-End

Uses Vue3 composition API and Quasar framework for front-end.

Uses Quasar and Vite to compile the front-end project to Laravel.

There is no need to build the front end project to run the App.

If changes occur on the front-end side. run the following command:

"npm run dist" - it will compile and build the project to laravel blade. check the vite.config.json.

## UI and UX Implementation

- Home Page
It display a searchable select box that can easy to type or manually select the city the want to check the weather status. (For future additional city to be added searchable select is suitable with)

It also display the recommended city below that can easily select prefered city to view.

- City View Page
City view will let you view the forecast of the selected city and popular place inside of it and also display the google map of selected area.

- city forecast tab
It will display city forecast with 3 to 5 days with 3hours gap. it will display time forecasted, temperature by celcious, weather forecast and humidity.

- place forecast tab
This will display all popular area of selected city specially the Historic and protected site. Click the button weather button of the right part area of the location will display the forecast of the specified area.




