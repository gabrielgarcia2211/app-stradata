<template>
    <div class="container mt-4">
        <div class="card" style="justify-content: center;">
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
                                aria-describedby="emailHelp"
                                v-model="user.nombre"
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
                                v-model="user.porcentaje"
                            />
                        </div>
                    </div>
                    <div class="col mt-5">
                        <button type="submit" class="btn btn-primary">
                            Buscar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"filtrar-usuario",
    data(){
        return {
            user:{
                nombre:"",
                porcentaje:""
            }
        }
    },
    methods:{
        async buscar(){
            await this.axios.post('/api/blog',this.blog).then(response=>{
                this.$router.push({name:"mostrarUsuario"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>
