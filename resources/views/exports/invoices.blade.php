<table>
    <thead>
    <tr>
        <th style="background-color:rgb(79, 144, 160)">Nombre</th>
        <th style="background-color:rgb(79, 144, 160)">Tipo Persona</th>
        <th style="background-color:rgb(79, 144, 160)">Tipo Cargo</th>
        <th style="background-color:rgb(79, 144, 160)">Departamento</th>
        <th style="background-color:rgb(79, 144, 160)">Municipio</th>
        <th style="background-color:rgb(79, 144, 160)">% Coincidencia</th>
    </tr>
    </thead>
    <tbody>
        @for ($m = 0; $m < count($invoices); $m++)
        <tr>
            <td>{{ $invoices[$m]['nombre'] }}</td>
            <td>{{ $invoices[$m]['tipo_persona'] }}</td>
            <td>{{ $invoices[$m]['tipo_cargo'] }}</td>
            <td>{{ $invoices[$m]['departamento'] }}</td>
            <td>{{ $invoices[$m]['municipio'] }}</td>
            <td>{{ $invoices[$m]['porcentaje'] }}</td>
        </tr>
        @endfor
    </tbody>
</table>