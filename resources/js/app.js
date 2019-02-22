require('./bootstrap');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
require('./plugins/bootstrap-vue');

window.Vue = require('vue');


require('./components/index');






import VueSweetalert2 from 'vue-sweetalert2';
import VueRouter from 'vue-router'

Vue.use(VueSweetalert2);
Vue.use(VueRouter);

// Componente base de inicio de la aplicación
import App from "./App.vue";

// Rutas folder routes/index.js
import router from "./routes/index";

const app = new Vue({
    router,
    template: '<App/>',
    components: {App}
  }).$mount('#app')
