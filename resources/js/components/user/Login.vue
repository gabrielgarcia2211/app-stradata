<template>
    <div class="login">
        <h1 class="title">Iniciar Sesion</h1>
        <form action class="form" @submit.prevent="login">
            <label class="form-label" for="email">Correo:</label>
            <input
                class="form-input"
                type="email"
                id="email"
                v-model="data.email"
                required
            />
            <label class="form-label" for="password">Contraseña:</label>
            <input
                class="form-input"
                type="password"
                id="password"
                v-model="data.password"
                required
            />
            <input class="form-submit" type="submit" value="Ingresar" />
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async login() {
            await this.axios
                .post("/api/auth/login", this.data)
                .then((response) => {
                    console.log(response.data.access_token)
                    localStorage.setItem('Token', response.data.access_token)
                    localStorage.setItem('Login', true)
                    window.location.href = '/mostrar'
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

<style>
.login {
    padding: 2rem;
}
.title {
    text-align: center;
}
.form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;
}

.form-label:first-of-type {
    margin-top: 0rem;
}

.form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;
}

.form-input:focus {
    outline: 0;
    border-color: #1ab188;
}
.form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: background 0.2s;
}

.form-submit:hover {
    background: #0b9185;
}
</style>
