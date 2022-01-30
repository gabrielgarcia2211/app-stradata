const Home = () => import('./components/Home.vue')

//importamos los componentes para los usuarios

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
    
]