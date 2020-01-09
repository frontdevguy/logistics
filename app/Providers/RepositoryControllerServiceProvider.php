<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryControllerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'App\Http\Repositories\Interfaces\TrackingRepositoryInterface',
            'App\Http\Repositories\TrackingRepository'
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
