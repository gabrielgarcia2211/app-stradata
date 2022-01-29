<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UserRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //VALIDACION DE REGLAS DE BUSQUEDA
        return [
            'nombre' => 'required|max:200|regex:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/',
            'porcentaje' => 'required|min:1|max:100|integer'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        //ESTA FUNCION DEVUELVE LA LISTA DE ERRORES ECONTRADOS
        throw new HttpResponseException(response()->json([  
            'response'   => false,
            'success'   => 'Validation Errors',
            'data'      => $validator->errors()
        ]));
    }
}
