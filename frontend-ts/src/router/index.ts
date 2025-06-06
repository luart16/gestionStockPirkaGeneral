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
import TraerTodosLosMaterialesView from '@/views/vistasMateriales/TraerTodosLosMaterialesView.vue'
import GestionarMaterialesView from '@/views/vistasMateriales/GestionarMaterialesView.vue'
import CrearMaterialView from '@/views/vistasMateriales/CrearMaterialView.vue'
import CrearStockProducto from '@/views/VistasStockProductosView.vue/CrearStockProducto.vue'

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

  {
    path: '/gestionarMateriales',
    name: 'gestionarMateriales',
    component: GestionarMaterialesView
  },

  {
    path: '/crearMaterial',
    name: 'crearMaterial',
    component: CrearMaterialView
  },

  {
    path: '/traerTodosLosMateriales',
    name: 'traerTodosLosMateriales',
    component: TraerTodosLosMaterialesView
  },

  {
    path: '/crearStockProducto',
    name: 'crearStockProducto',
    component: CrearStockProducto
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
