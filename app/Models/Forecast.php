<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forecast extends Model
{
    use HasFactory;

    protected $casts = [
        'content' => 'array',
    ];

    protected $guarded = [
        'id'
    ];

    public function scopeCountry($query, $country, $code)
    {
        return $query->where('country', $country)
            ->where('code', $code);
    }
}
