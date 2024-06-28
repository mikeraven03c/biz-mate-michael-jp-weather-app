<?php

namespace App\Services;

use App\Actions\IsNonApiServiceCache;
use App\Models\Venue;
use App\Interfaces\VenueInterface;
use Illuminate\Support\Facades\Http;
use App\DataTransferObject\VenueData;

use function PHPUnit\Framework\throwException;

class FourSquareService extends ApiService implements VenueInterface
{
    protected function get(
        string $categories,
        string $city,
        string $code,
        int $limit = 5
    ): mixed {
        $response = Http::acceptJson()
            ->withHeader(
                'Authorization',
                $this->appId
            )
            ->get($this->url, [
                'categories' => $categories,
                'near' => $city . ',' . $code,
                'limit' => $limit
            ]);

        if ($response->successful()) {
            return $response->json();
        } else {
            throwException($response->toException());
        }
    }

    protected function getByVenueData(VenueData $venueData)
    {
        return $this->get(
            categories: $venueData->categories,
            city: $venueData->city,
            code: $venueData->code,
        );
    }

    public function getVenue(VenueData $venueData)
    {
        if ((new IsNonApiServiceCache)()) {
            return $this->getByVenueData($venueData);
        }

        $venue = Venue::byCountry($venueData->city, $venueData->code)
            ->first();

        if ($venue) {
            if ($this->updateHoursAgo($venue)) {
                return  $venue->content;
            } else {
                $result = $this->getByVenueData($venueData);
                $venue->content = $result;
                $venue->save();
            }
        } else {
            $result = $this->getByVenueData($venueData);
            $venue = Venue::create([
                'country' => $venueData->city,
                'code' => $venueData->code,
                'content' => $result
            ]);
        }

        return $result;
    }

    /**
     * Helps detect if venue is recently updated
     *
     * @param App\Models\Venue $venue
     */
    private function updateHoursAgo(Venue $venue)
    {
        $fewHoursAgo = now()->subHours(12);

        return $venue->updated_at > $fewHoursAgo;
    }
}
