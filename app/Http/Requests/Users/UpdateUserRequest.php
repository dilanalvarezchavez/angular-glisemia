<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'name' => ['required'],
            'ci' => ['required', 'max:100'],
            'password' => ['required', 'min:8', 'max:16'],
            'roles' => ['required'],
        ];
    }
    public function attributes()
    {
        return [
            'name' => 'nombre',
            'ci' => 'identificacion',
            'password' => 'contraseña',
            'roles' => 'roles',

        ];
    }
}
