<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrackingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trackings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tracking_code', 200);
            $table->enum('action_type', 
                [
                    'dispatched_to_shipper',
                    'shipper_received',
                    'shipper_dispatched',
                    'externer_handler_received',
                    'externer_handler_dispatched',
                    'picked'
                ]
            )->default('dispatched_to_shipper');
            $table->string('action_text');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trackings');
    }
}
