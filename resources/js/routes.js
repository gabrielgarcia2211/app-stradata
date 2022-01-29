const Home = () => import('./components/Home.vue')

//importamos los componentes para los usuarios

const Crear = () => import('./components/user/Crear.vue')
const Login = () => import('./components/user/Login.vue')

export const routes = [
    {
        name: 'home',
        path: '/mostrar',
        component: Home
    },
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'crearUsuario',
        path: '/crear-usuario',
        component: Crear
    },
    
]