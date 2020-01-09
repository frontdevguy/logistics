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
            'App\Repositories\Interfaces\TrackingRepositoryInterface',
            'App\Repositories\TrackingRepository'
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
