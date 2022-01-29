<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Book;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{

    public function index()
    {
        //LISTAR TODOS LOS USUARIOS DESDE LA TABLA(MODELO) IMPORTADA BOOKS
        $users = Book::all();
        return  response()->json($users, 202);
    }


    public function similarText(UserRequest $request)
    {

        $var_1 = $request->nombre;
        $var_2 = $request->porcentaje;
        $similar = array();

        try {
            //SE UTILIZA BUSQUEDA EN MAYUSCULAS, PARA OBTENER RESULTADOS
            //CON COINCIDENCIAS CERCANAS O IGUALES AL NOMBRE BUSCADO


            $resp = DB::select("SELECT 
            REPLACE( nombre , ' ', '') AS nombre_filtro, nombre, tipo_persona, tipo_cargo,departamento,municipio
            FROM books WHERE UPPER(nombre) LIKE UPPER('%$var_1%')");

            foreach ($resp as $data) {
                //SE CALCULA EL PORCENTAJE DE IGUALDAD
                //FILTRANDO LAS PALABRAS Y ELIMINANDO ESPACIOS EN BLANCO
                $var_1 = str_replace(' ', '', $var_1);

                similar_text($var_1,  $data->nombre_filtro, $percent);
                //SE VALIDA SI EL PORCENTAJE ES EL MINIMO REQUERIDO
                if ($percent >= $var_2)

                    array_push($similar,  [
                        'nombre' => $data->nombre,
                        'tipo_persona' => ucwords(strtolower($data->tipo_persona)),
                        'tipo_cargo' => ucwords(strtolower($data->tipo_cargo)),
                        'departamento' => ucwords(strtolower($data->departamento)),
                        'municipio' => ucwords(strtolower($data->municipio)),
                        'porcentaje' => $percent
                    ]);
            }

            return response()->json([
                'response' => true,
                'message' => $similar
            ], 202);
        } catch (\Exception $e) {

            return response()->json([
                'response' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
