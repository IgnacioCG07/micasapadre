import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import AtractivosView from '../views/AtractivosView.vue'
import GastronomiaView from '../views/GastronomiaView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/',            name: 'inicio',      component: InicioView },
  { path: '/atractivos',  name: 'atractivos',  component: AtractivosView },
  { path: '/gastronomia', name: 'gastronomia', component: GastronomiaView },
  { path: '/contacto',    name: 'contacto',    component: ContactoView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
