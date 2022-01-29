<template>
    <div class="row">
        <div class="col-12 mb-2">
            <router-link :to="{ name: 'crearUsuario' }" class="btn btn-success"
                ><i class="fas fa-sign-out-alt"></i
            ></router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>ID</th>
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
                            <td>{{ user.id }}</td>
                            <td>{{ user.nombre }}</td>
                            <td>{{ user.tipo_persona }}</td>
                            <td>{{ user.tipo_cargo }}</td>
                            <td>{{ user.departamento }}</td>
                            <td>{{ user.municipio }}</td>
                            <td>{{ user.coincidencia }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "users",
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.mostrarUsers();
    },
    methods: {
        async mostrarUsers() {
            await this.axios
                .get("/api/users")
                .then((response) => {
                    //this.users = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    this.users = [];
                });
        }
    },
};
</script>
