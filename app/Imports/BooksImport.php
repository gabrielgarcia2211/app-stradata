<?php

namespace App\Imports;

use App\Models\Book;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class BooksImport implements ToModel, WithCustomCsvSettings
{

    public function model(array $row)
    {
        return new Book([
            'departamento' => $row['0'],
            'localidad' =>$row['1'],
            'municipio' =>$row['2'],
            'nombre' =>$row['3'],
            'años_activo' =>$row['4'],
            'tipo_persona' =>$row['5'],
            'tipo_cargo' =>$row['6']
        ]);

    }

    public function getCsvSettings(): array
    {
        return [
            'delimiter' => ';'
        ];
    }


}
