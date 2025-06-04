<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/home" class="nav-brand">Pirka</router-link>
      <div class="nav-links">
        <router-link to="/home" class="nav-link">
          Inicio
        </router-link>
        <router-link to="/gestionarProductos" class="nav-link">
          Gestionar Productos
        </router-link>
        <router-link to="/gestionarMateriales" class="nav-link">
          Gestionar Materiales
        </router-link>
        <router-link to="/stock" class="nav-link">
          Gestionar Stock
        </router-link>
        <button class="btn-principal" @click="deslogueo">Desloguear</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { userStore } from '@/store/user';
import { useRouter } from 'vue-router';

const store = userStore();
const router = useRouter();

const deslogueo = () => {
  store.Deslogueo();
  router.push({ name: 'login' });
};
</script>

<style scoped>
* {
  font-family: Poppins;
}

.navbar {
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e9ecef;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  color: #ff6b8a;
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-link {
  color: rgba(70, 40, 110, 1); /* lila */
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-link:hover {
  background-color: rgba(70, 40, 110, 0.15); /* fondo lila claro */
  color: rgba(70, 40, 110, 1); /* texto sigue lila */
}

/* Botón "DESLOGUEAR" */
.btn-principal {
  background-color: #ff6b8a;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-principal:hover {
  background-color: #f8a3b5;
}
</style>
