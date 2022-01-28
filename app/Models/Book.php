<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ["departamento","localidad","municipio",
    "nombre","años_activo","tipo_persona","tipo_cargo"];

    
}
