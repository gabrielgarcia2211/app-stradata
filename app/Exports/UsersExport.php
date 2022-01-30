<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class UsersExport implements FromView
{
    public function __construct($data)
    {
        $this->data = $data;
    }


    public function view(): View
    {

        return view('exports.invoices', [
            'invoices' => $this->data
        ]);
    }
}
