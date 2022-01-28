<?php

namespace App\Imports;

use App\Models\Book;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class BooksImport implements ToModel, WithCustomCsvSettings, WithHeadingRow, WithChunkReading
{

    public function model(array $row)
    {
        return new Book([
            'departamento' => $row["departamento"],
            'localidad' =>$row["localidad"],
            'municipio' =>$row["municipio"],
            'nombre' =>$row["nombre"],
            'años_activo' =>$row["anos_activo"],
            'tipo_persona' =>$row["tipo_persona"],
            'tipo_cargo' =>$row["tipo_cargo"]
        ]);

    }

    public function getCsvSettings(): array
    {
        return [
            'delimiter' => ';'
        ];
    }

    public function chunkSize(): int
    {
        return 1000;
    }

    public function headingRow(): int
    {
        return 1;
    }


}
