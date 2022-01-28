<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{

    public function index()
    {
        $users = Book::all();
        return $users;
    }


    public function similarText(Request $request)
    {
        $var_1 = $request->nombre;
        $var_2 = $request->porcentaje;
        $similar = array();

        $resp = DB::select("SELECT nombre FROM books WHERE UPPER(nombre) LIKE UPPER('%$var_1%')");

        foreach ($resp as $data) {

            similar_text($var_1,  $data->nombre, $percent);

            if ($percent >= $var_2)

                array_push($similar,  [
                    'nombre' => $data->nombre,
                    'porcentaje' => $percent
                ]);
        }

        return response()->json($similar,200);
    }
}
