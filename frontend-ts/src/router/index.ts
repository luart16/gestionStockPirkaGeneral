import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import CrearUsuarioView from '@/views/vistasUsuarios/CrearUsuarioView.vue'
import CrearSucursalView from '@/views/vistasSucursales/CrearSucursalView.vue'
import traerTodosLosUsuariosView from '@/views/vistasUsuarios/traerTodosLosUsuariosView.vue'
import traerTodasLasSucursalesView from '@/views/vistasSucursales/traerTodasLasSucursalesView.vue'

const routes = [

   {
    path: "/",
    name: "login",
    component: LoginView,
  },

  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/crearUsuario',
    name: 'crearUsuario',
    component: CrearUsuarioView
  },

  {
    path: '/crearSucursal',
    name: 'crearSucursal',
    component: CrearSucursalView
  },
  
  {
    path: '/traerUsuarios',
    name: 'traerUsuarios',
    component: traerTodosLosUsuariosView
  },
  
  {
    path: '/traerSucursales',
    name: 'traerSucursales',
    component: traerTodasLasSucursalesView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
