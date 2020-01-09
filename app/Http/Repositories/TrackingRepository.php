<?php
namespace App\Http\Repositories;

use App\Http\Repositories\Interfaces\TrackingRepositoryInterface;
use App\Trackings;

class TrackingRepository implements TrackingRepositoryInterface 
{
    public function construct()
    {
        $this->model = new Trackings();
    }

    public function findByCode($trackingCode) : array
    {
        $trackingDetails = $this->model->where('tracking_code', '=', $trackingCode)->get();
        if(!$trackingDetails)  return [];
        return $trackingDetails;
    }

}