<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Imports\BooksImport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{
    public function import()
    {

        if (Book::count() > 0) {
            echo 'LISTO';
        } else {
            Excel::import(new BooksImport, 'archivoDiccionario.csv');
            echo 'IMPORTADO';
        }

        return;
    }
}
