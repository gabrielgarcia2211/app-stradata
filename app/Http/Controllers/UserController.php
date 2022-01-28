<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{

    public function index()
    {
        //LISTAR TODOS LOS USUARIOS DESDE LA TABLA(MODELO) IMPORTADA BOOKS
        $users = Book::all();
        return  response()->json($users, 202);
    }


    public function similarText(Request $request)
    {
        $var_1 = $request->nombre;
        $var_2 = $request->porcentaje;
        $similar = array();

        //SE FILTRAN LAS PALABRAS ELIMINANDO ESPACIOS EN BLANCO
        //SE UTILIZA BUSQUEDA EN MAYUSCULAS, PARA OBTENER RESULTADOS
        //CON COINCIDENCIAS CERCANAS O IGUALES AL NOMBRE BUSCADO

        $resp = DB::select("SELECT REPLACE( nombre , ' ', '') AS nombre_filtro, nombre FROM books WHERE UPPER(nombre) LIKE UPPER('%$var_1%')");

        foreach ($resp as $data) {
            //SE CALCULA EL PORCENTAJE DE IGUALDAD
            similar_text($var_1,  $data->nombre_filtro, $percent);
            //SE VALIDA SI EL PORCENTAJE ES EL MINIMO REQUERIDO
            if ($percent >= $var_2)

                array_push($similar,  [
                    'nombre' => $data->nombre,
                    'porcentaje' => $percent
                ]);
        }

        return response()->json($similar, 202);
    }


    /* $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:6',
        ]); */
}
