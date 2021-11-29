<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePapersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('papers', function (Blueprint $table) {
            $table->id();
            $table->text('dia');

            $table->text('ayunas');
            $table->text('nph_lantus');
            $table->text('rapida_ultra_rap');

            $table->text('media_manana');
            $table->text('rapida_ultra_rap_m');

            $table->text('almuerzo');
            $table->text('rapida_ultra_rap_a');

            $table->text('media_tarde');
            $table->text('rapida_ultra_rap_t');

            $table->text('merienda');
            $table->text('rapida_ultra_rap_md');
            $table->text('nph_lantus_md');

            $table->text('dormir');
            $table->text('madrugada');
            $table->text('correcion_total');




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
        Schema::dropIfExists('papers');
    }
}
