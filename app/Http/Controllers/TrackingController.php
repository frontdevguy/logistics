<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Repositories\Interfaces\TrackingRepositoryInterface;
use App\Http\Requests\Tracking\RetrieveDetailsRequest;

class TrackingController extends Controller
{
    public $tracking = null;

    public function construct(TrackingRepositoryInterface $trackingRepository) {
        $this->tracking = $trackingRepository;
    }

    /**
     * Returns the tracking data
     * for a specified tracking code
     * 
     * @param RetrieveDetailsRequest $request
     * @return array
     */

    public function details(RetrieveDetailsRequest $request) : array
    {
        return [];        //$this->tracking->findByCode($request->trackingCode);
    }
}
