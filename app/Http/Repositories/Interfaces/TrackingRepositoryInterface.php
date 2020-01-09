<?php
namespace App\Http\Repositories\Interfaces;

interface TrackingRepositoryInterface {
    public function findByCode(string $trackingCode) : object;
}