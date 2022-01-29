<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ImportController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//LA MAYORIA DE LAS RUTAS SON PRUEBAS REALIZADAS POR POSTAMN
//LAS RUTAS REALMENTE IMPLEMENTADAS EN EL APLICATIVO SON LAS QUE EN SU TERMINACION
//TENGAN *** TRES ASTERISCOS

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    
    Route::post('login', [AuthController::class, 'login']);//***
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);//***
    Route::post('refresh',  [AuthController::class, 'refresh']);
    Route::post('me',  [AuthController::class, 'me']);

});


//CABE RESALTAR QUE import ES UNA RUTA QUE ME AYUDA A MIGRAR A LA TABLA BOOKS
//TODA LA INFORMACION QUE SE ENCUENTRA EN EL ARCHIVO CSV public/archivoDiccionario.csv

Route::group([

    'middleware' => 'jwt.verify',
    

], function ($router) {

    Route::get('users', [UserController::class, 'index']);
    Route::get('import', [ImportController::class, 'import']);//***
    Route::post('similary', [UserController::class, 'similarText']);//***
});
