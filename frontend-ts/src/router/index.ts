import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import CrearUsuarioView from '@/views/vistasUsuarios/CrearUsuarioView.vue'
import CrearSucursalView from '@/views/vistasSucursales/CrearSucursalView.vue'
import traerTodosLosUsuariosView from '@/views/vistasUsuarios/traerTodosLosUsuariosView.vue'
import traerTodasLasSucursalesView from '@/views/vistasSucursales/traerTodasLasSucursalesView.vue'
import CrearProductoView from '@/views/vistasProducto/CrearProductoView.vue'
import GestionarProductosView from '@/views/vistasProducto/GestionarProductosView.vue'
import traerTodoslosProductosView from '@/views/vistasProducto/traerTodoslosProductosView.vue'
import TraerProductosPorTipoView from '@/views/vistasProducto/TraerProductosPorTipoView.vue'

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

  {
    path: '/gestionarProductos',
    name: 'gestionarProductos',
    component: GestionarProductosView
  },
  {
    path: '/crearProducto',
    name: 'crearProducto',
    component: CrearProductoView
  },

  {
    path: '/traerTodosLosProductos',
    name: 'traerTodosLosProductos',
    component: traerTodoslosProductosView
  },

  {
    path: '/productos/:tipo',
    name: 'productosPorTipo',
    component: TraerProductosPorTipoView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
