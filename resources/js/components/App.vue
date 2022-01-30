<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <!-- llamamos al logo de Vue -->
                    <img
                        src="https://vuejs.org/images/logo.svg"
                        alt=""
                        width="30"
                        height="24"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <div v-if="login == 'true'">
                            <button
                                type="button"
                                class="btn btn-link"
                                style="color: white"
                                v-on:click="salir"
                            >
                                Salir
                            </button>
                        </div>
                        <div v-else>
                            <router-link
                                exact-active-class="active"
                                to="/"
                                class="nav-link active"
                                >Login</router-link
                            >
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            login: localStorage.getItem("Login"), 
            token : localStorage.getItem("Token"),
        };
    },
    methods: {
        async salir() {
            await this.axios
                .post("/api/auth/logout", null, {
                    headers: {
                        Authorization: "Bearer" + localStorage.getItem("Token"),
                    },
                })
                .then((response) => {
                    localStorage.setItem("Token", "");
                    localStorage.setItem("Login", false);
                    window.location.href = "/";
                })
                .catch((error) => {
                    if (error.response.status == 401)
                        this.$swal({
                            icon: "error",
                            title: "Opps..",
                            text: "Credenciales Incorrectas",
                        });
                });
        },
    },
};
</script>
