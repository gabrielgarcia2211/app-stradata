<template>
    <div class="container mt-4">
        <div class="card" style="justify-content: center">
            <div class="card-header bg-primary" style="color: white">
                Buscador
            </div>
            <div class="card-body">
                <form class="row g-3" @submit.prevent="buscar">
                    <div class="col auto">
                        <div class="mb-3">
                            <label for="nombre" class="form-label"
                                >Nombres y Apellidos</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="nombre"
                                v-model="data.nombre"
                                name="nombre"
                                aria-describedby="emailHelp"
                            />
                        </div>
                    </div>
                    <div class="col auto">
                        <div class="mb-3">
                            <label for="porcentaje" class="form-label"
                                >Porcentaje de Coincidencia</label
                            >
                            <input
                                type="number"
                                class="form-control"
                                id="porcentaje"
                                v-model="data.porcentaje"
                                name="porcentaje"
                            />
                        </div>
                    </div>
                    <div class="col mt-5">
                        <button type="submit" class="btn btn-primary">
                            Buscar
                        </button>
                    </div>
                </form>
                <div v-if="users.length > 0">
                    <div class="col-12 mb-2"></div>
                    <div class="col-12">
                        <div class="table-responsive">
                            <table
                                class="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellspacing="0"
                            >
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Tipo Persona</th>
                                        <th>Tipo Cargo</th>
                                        <th>Departamento</th>
                                        <th>Municipio</th>
                                        <th>% Coincidencia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                        <td>{{ user.nombre }}</td>
                                        <td>{{ user.tipo_persona }}</td>
                                        <td>{{ user.tipo_cargo }}</td>
                                        <td>{{ user.departamento }}</td>
                                        <td>{{ user.municipio }}</td>
                                        <td>{{ user.porcentaje }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Call the dataTables jQuery plugin
$(document).ready(function () {
    $("#dataTable").DataTable();
});
export default {
    name: "users",
    name: "errores",
    data() {
        return {
            data: {
                nombre: "",
                porcentaje: "",
            },
            users: [],
        };
    },
    methods: {
        async buscar() {
            await this.axios
                .post("/api/similary", this.data)
                .then((response) => {
                    if (response.data.message.length == 0) {
                        this.$swal({
                            icon: "warning",
                            title: "Opps...",
                            text: "No hay Coincidencias Encontradas!",
                        });
                        this.users = "";
                    } else {
                        if (response.data.response) {
                            this.$swal({
                                icon: "success",
                                title: "Hecho",
                                text: "Coincidencias Encontradas!",
                            });
                            this.users = response.data.message;
                        } else {
                            let listError = "";
                            this.errores = response.data.message;
                            for (var prop in this.errores) {
                                listError += "\n" + this.errores[prop];
                            }

                            this.$swal({
                                icon: "error",
                                title: "Opps..",
                                text: listError,
                            });
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
