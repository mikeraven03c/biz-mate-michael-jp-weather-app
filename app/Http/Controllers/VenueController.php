<?php

namespace App\Http\Controllers;

use App\DataTransferObject\VenueData;
use App\Interfaces\VenueInterface;

class VenueController
{
    public function __construct(public VenueInterface $venueService)
    {
    }

    public function venue(string $city) : mixed
    {
        $code = ucfirst(strtolower($city));
        $result = $this->venueService->getVenue(new VenueData($code));

        return $result;
    }
}
