<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    
  </div>
</template> -->
<template>
  <div v-if="store.Logueado"><!--El usuario debe estar logueado para que se muestre lo que está dentro de este div-->
    <NavBar />
    <div class="home-container">
      <h1>AQUÍ DEBEN IR 3 TARJETAS</h1>
      <h2>PIEDRAS / PLACAS / PISOS</h2>     
      
       <router-link to="/traerUsuarios">
        <button class="btn-provisorio">Usuarios</button>
      </router-link>
      <router-link to="/traerSucursales">
        <button class="btn-provisorio">Sucursales</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    <RequiereLogin />
  </div>

</template>

<script setup>
import RequiereLogin from '@/components/RequiereLogin.vue';
import NavBar from '@/components/BarraNavegacion.vue'
import { userStore } from '@/store/user';

const store = userStore();

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