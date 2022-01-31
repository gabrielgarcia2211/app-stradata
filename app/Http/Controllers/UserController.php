<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Book;
use App\Exports\UsersExport;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;


class UserController extends Controller
{

    /** PARA DAR RESPUESTA AL PUNTO 6 DE ADICIONALES
     * 
     * 
     * LA FORMA DE MANEJAR GRANDES VOLUMENES DE INFORMACION PUEDE SER ATRAVES DE LA NORMALIZACION DE DATOS
     * O EN OTRAS PALABRAS EDA, ES UNA BUENA FORMA DE MANEJAR GRANDES VOLUMENES DE INFORMACION QUE NECESITAN SER NORMALIZADOS. 
     * YA QUE EXISTEN GRANDES LIBRERIAS COMO PANDAS O SKILINE DE PYTHON QUE NOS PERMITEN COMPRIMIR O EXTENDER LOS VALORES A TRAVES DE UNA VARIABLE 
     * DEFINIDA EN UN RANGO, FILTRANDO Y ELIMINADO LA DATA NECESARA HASTA APROXIMARLA A LO QUE DESEAMOS O ESTAMOS BUSCANDO.
     * 
     * 
     * POR OTRO LADO UNA ALTERNATIVA MAS TEDIOSA SERIA FILTRAR LA INFORMACION A TRAVES DE DIVERSOS PASOS, NORMALIZACION, SIMILITUD, LONGITUD, COINCIDENCIAS EN TEXTO. APLICANDO
     * ALGORTIMOS QUE SE ENCARGUEN DE COMPRAR A TRAVES DE HASH O MAPING DE CADA UNA. DADO QUE SON GRANDES VOLUMENES DE DATOS EL PROCESAMIENTO DE LA MAQUINA SERIA DE UNA FORMA
     * ABISMAL, POR LO QUE RECOMENDARIA FRACCIONAR LA TAREAS EN DIVERSOS PROCESOS RECURSIVOS Y SEGUROS. LA RECURSIVIDAD ES PARTE PRIMORDIAL PARA EVITAR EJECUCION DE CODIGOS FOR, WHILE O 
     * FOR, DADO QUE ESTOS CONSUMEN DEMASIADO PROCESAMIENTO EN LA MAQUINA.
     * 
     * 
     * SIN DUDA ALGUNA PYTHON ES EL MEJOR LENGUAJE EN TANTO A LA ESCABILIDAD Y NORMALIZACION DE DATOS A TRAVES DE DIVERSOS ALGORITMOS LINEAS, ARBOLES DECISON REGRESION LINEAL MULTIPLE
     * , SVR,  RANDOM FOREST Y HASTA LA VALIDACION CRUZADA, LOS CUALES SON ALGORITMOS YA PREDEFINIDOS Y OPTIMIZADOS POR LA COMUNIDAD , DE GRAN AYUDA AL MOMENTO DE HABLAR DE FILTRAR Y OBETNER INFORMACION
     * 
     */

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
            FROM books");

            foreach ($resp as $data) {
                //SE CALCULA EL PORCENTAJE DE IGUALDAD
                //FILTRANDO LAS PALABRAS Y ELIMINANDO ESPACIOS EN BLANCO
                $var_1 = str_replace(' ', '', $var_1);
                
                /**/

                /** REGLA DE TRES */
                $data = levenshtein($var_1,  $data->nombre_filtro);


                $porc = ($data * 100)/strlen($str1);

                $tot = -($porc-100);
                /**/
                
                

                //similar_text($var_1,  $data->nombre_filtro, $percent);
                //SE VALIDA SI EL PORCENTAJE ES EL MINIMO REQUERIDO
                if ($tot >= $var_2)

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

    public function export(Request $request)
    {
        $data = $request->all();
        return Excel::download(new UsersExport($data), 'users.xlsx');
    }
}
