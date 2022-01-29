const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')


//importamos los componentes para los usuarios

const Crear = () => import('./components/user/Crear.vue')
const Filtrar = () => import('./components/user/Filtrar.vue')
const Mostrar = () => import('./components/user/Mostrar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    },
    {
        name: 'crearUsuario',
        path: '/crear-usuario',
        component: Crear
    },
    {
        name: 'filtrarUsuario',
        path: '/filtrar',
        component: Filtrar
    },
    {
        name: 'mostrarUsuario',
        path: '/mostrar',
        component: Mostrar
    },
    
]