import { createRouter, createWebHashHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ContactoView from '../views/ContactoView.vue'
import EmprendedoresView from '../views/EmprendedoresView.vue'

const routes = [
  { path: '/', name: 'inicio', component: InicioView },
  { path: '/nosotros', name: 'nosotros', component: NosotrosView },
  { path: '/servicios', name: 'servicios', component: ServiciosView },
  { path: '/emprendedores', name: 'emprendedores', component: EmprendedoresView },
  { path: '/contacto', name: 'contacto', component: ContactoView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
