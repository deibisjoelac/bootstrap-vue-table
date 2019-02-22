import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//Definimos las rutas y los componentes respectivos

import routes from './rutas';

const router = new VueRouter({
  //mode : 'history',
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes 
})

export default router ;