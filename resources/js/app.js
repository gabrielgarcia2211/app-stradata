require('./bootstrap');
import vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
window.Vue = vue;

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './components/App.vue';

//importamos Axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//Importamos y configuramos el Vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

//finalmente, definimos nuestra app de Vue
const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
