<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    
  </div>
</template> -->
<template>
  <div v-if="store.Logueado"><!--El usuario debe estar logueado para que se muestre lo que está dentro de este div-->
    <NavBar />
    <div class="home-container">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
    <div @click="irA('Piedra')" class="cursor-pointer bg-gray-200 p-6 rounded-lg shadow hover:bg-gray-300">
      <h2 class="text-xl font-bold">Piedras</h2>
    </div>
    <div @click="irA('Placa')" class="cursor-pointer bg-gray-200 p-6 rounded-lg shadow hover:bg-gray-300">
      <h2 class="text-xl font-bold">Placas</h2>
    </div>
    <div @click="irA('Piso')" class="cursor-pointer bg-gray-200 p-6 rounded-lg shadow hover:bg-gray-300">
      <h2 class="text-xl font-bold">Pisos</h2>
    </div>
  </div>      
       <router-link to="/traerUsuarios">
        <button class="btn-provisorio">Usuarios</button>
      </router-link>
      <router-link to="/traerSucursales">
        <button class="btn-provisorio">Sucursales</button>
      </router-link>
      <router-link to="/traerProductosPortipo">
        <button class="btn-provisorio">Productos</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    <RequiereLogin />
  </div>

</template>

<script setup lang="ts">
import RequiereLogin from '@/components/RequiereLogin.vue';
import NavBar from '@/components/BarraNavegacion.vue'
import { userStore } from '@/store/user';
import { useRouter } from 'vue-router';

const store = userStore();
const router = useRouter();

const irA = (tipo: string) => {
  router.push(`/productos/${tipo}`);
}

</script>

<style scoped>
.home-container {
  padding: 20px;
  text-align: center;
}

/* Estilo provisorio para el botón */
.btn-provisorio {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #46286e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-provisorio:hover {
  background-color: #5a2d7a;
}
</style>