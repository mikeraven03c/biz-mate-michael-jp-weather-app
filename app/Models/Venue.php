<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venue extends Model
{
    use HasFactory;

    protected $casts = [
        'content' => 'array',
    ];

    protected $guarded = [
        'id'
    ];

    public function scopeByCountry($query, $country, $code)
    {
        return $query->where('country', $country)
            ->where('code', $code);
    }
}
