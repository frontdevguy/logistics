<?php
namespace App\Http\Repositories;

use App\Http\Repositories\Interfaces\TrackingRepositoryInterface;
use App\Trackings;

class TrackingRepository implements TrackingRepositoryInterface 
{
    public function __construct()
    {
        $this->model = new Trackings();
    }

    /**
     * Retrieves tracking details of code
     * 
     * @param string $tranckingCode
     * @return object
     */
    public function findByCode(string $trackingCode) : object
    {
        return $this->model->where('tracking_code', '=', $trackingCode)->get();
    }

}