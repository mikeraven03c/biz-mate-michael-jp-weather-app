<?php

namespace App\Interfaces;

use App\DataTransferObject\VenueData;

interface VenueInterface
{
    /**
     * @param \App\DataTransferObject\VenueData $venueData - contains city
     * @return array return result of place data with in city
     */
    public function getVenue(VenueData $venueData);
}
