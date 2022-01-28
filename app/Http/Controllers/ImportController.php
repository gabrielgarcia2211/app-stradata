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

        Excel::import(new BooksImport, 'archivoDiccionario.csv');
        Book::find(1)->delete();
        echo 'IMPORTADO';
        return;

        
    }
}
