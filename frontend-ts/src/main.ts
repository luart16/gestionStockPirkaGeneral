import { createApp } from 'vue' //Importo la función createApp desde Vue que me sirve para crear la aplicación Vue.
import App from './App.vue' //Importo el componente principal de mi app. Este archivo App.vue es donde empieza visualmente mi app. De ahí se irán cargando los demás componentes.
import router from './router' //Importo el sistema de rutas, que me sirve para manejar las páginas o vistas de mi app
import { createPinia } from 'pinia' //importo la función para crear una instancia de Pinia para de manejar el estado global
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';// esto es para la persistencia (que no se desloguee al recargar)

const pinia= createPinia() //Creo una nueva instancia de Pinia para usar en mi app
pinia.use(piniaPluginPersistedstate) // esto es para la persistencia (que no se desloguee al recargar)
createApp(App).use(router).use(pinia).mount('#app') //acá es como crear mi app y agregarle funcionalidades y conectarla al html.
/*Sería:
createApp(App): crea tu app a partir del componente raíz (App.vue)
.use(pinia): le digo a vue que use pinia para el manejo del estado
.use(router): le digo que use las rutas.
.mount('#app'): monta la app en el HTML, específicamente en el <div id="app">.
*/

