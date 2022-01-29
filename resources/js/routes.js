const Home = () => import('./components/Home.vue')


//importamos los componentes para los usuarios

const Crear = () => import('./components/user/Crear.vue')
const Mostrar = () => import('./components/user/Mostrar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'crearUsuario',
        path: '/crear-usuario',
        component: Crear
    },
    {
        name: 'mostrarUsuario',
        path: '/mostrar',
        component: Mostrar
    },
    
]