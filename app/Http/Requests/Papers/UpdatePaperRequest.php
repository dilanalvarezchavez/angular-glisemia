<?php

namespace App\Http\Requests\Papers;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePaperRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'dia' =>  ['required'],

            'ayunas' =>  ['required'],
            'nph_lantus' =>  ['required'],
            'rapida_ultra_rap'  =>  ['required'],
            'correcion' =>  ['required'],

            'media_mañana' =>  ['required'],
            'rapida_ultra_rap_m' =>  ['required'],
            'correcion_m' =>  ['required'],

            'almuerzo' =>  ['required'],
            'rapida_ultra_rap_a' =>  ['required'],
            'correcion_a' =>  ['required'],

            'media_tarde' =>  ['required'],
            'rapida_ultra_rap_t' =>  ['required'],
            'correcion_t' =>  ['required'],

            'merienda' =>  ['required'],
            'rapida_ultra_rap_md' =>  ['required'],
            'correcion_md' =>  ['required'],
            'nph_lantus_md' =>  ['required'],

            'dormir' =>  ['required'],
            'madrugada' => ['required'],
        ];
    }

    public function attributes()
    {
        return [
            'dia' => 'dia',

            'ayunas' =>  'ayunas',
            'nph_lantus' => 'nph_lantus',
            'rapida_ultra_rap'  => 'rapida_ultra_rap',
            'correcion' => 'correcion',

            'media_mañana' =>   'media_mañana',
            'rapida_ultra_rap_m' =>  'rapida_ultra_rap_m',
            'correcion_m' => 'correcion_m',

            'almuerzo' =>  'almuerzo',
            'rapida_ultra_rap_a' =>  'rapida_ultra_rap_a',
            'correcion_a' =>  'correcion_a',

            'media_tarde' =>  'media_tarde',
            'rapida_ultra_rap_t' =>  'rapida_ultra_rap_t',
            'correcion_t' =>  'correcion_t',

            'merienda' =>  'merienda',
            'rapida_ultra_rap_md' =>  'rapida_ultra_rap_md',
            'correcion_md' =>  'correcion_md',
            'nph_lantus_md' =>  'nph_lantus_md',

            'dormir' =>  'dormir',
            'madrugada' => 'madrugada',
        ];
    }
}
