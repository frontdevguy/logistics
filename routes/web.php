<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('{vuePage}', function () {
    return view('main');
})->where('vuePage',  '.+|');

Route::post('/tracking-details', function() {
    return json_encode([
        'name' => 'Jo',
        'age' => '25'
    ]);
});