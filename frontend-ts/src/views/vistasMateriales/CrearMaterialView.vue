<template>
  <div v-if="store.Logueado">
    <div v-if="store.Rol == 'administrador'">
      <NavBar />
      <div class="login-container">
        <div class="presentacion">
          <h1 class="titulo">Crear Material</h1>
          <p class="subtitulo subtitulo-1">Formulario para registrar un nuevo material.</p>
        </div>

         <div class="login-box">
          <form @submit.prevent="crearMaterial">
            <input v-model="materialACrear.nombreMaterial" type="text" placeholder="Nombre del material" required />            
            <input v-model="materialACrear.color" type="text" placeholder="Color" required />
            <input v-model="materialACrear.descripcion" type="text" placeholder="Descripción del material" />
            <input v-model="materialACrear.unidadDeMedida" type="text" placeholder="Unidad de medida (Kg, Lts, etc.)" />
            <input v-model="materialACrear.precio" type="number" placeholder="Precio" />
            <button type="submit" class="btn-principal">Crear Material</button>
            <P>***PONER UN MENSAJE DE ÉXITO AL APRETAR EL BOTÓN DE CREAR PARA SABER SI SE CREÓ Y MANTENER EN ESTA PÁG.</P> 
            <router-link to="/GestionarMateriales">
              <button class="btn-principal">Volver</button>
            </router-link> 
          </form>
        </div> 

      </div>
    </div>
    <div v-else>
      <RequiereRol />
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
import RequiereRol from '@/components/RequiereRol.vue';
import { servicioMaterial } from '@/services/material.service';
import type { DatosMateriales } from '@/modelos/material';
import { ref } from 'vue';

const store = userStore();
const router = useRouter();

const materialACrear = ref<DatosMateriales>({
  _id: '',
  nombreMaterial: '',
  color: '',
  descripcion: '',
  unidadDeMedida: '',
  precio: 0,
})


const crearMaterial = async () => {
  try {
    await servicioMaterial.crear(materialACrear.value)
    //router.push({ name: 'traerSucursales' }); //puedo ponerle para que vuelva al listado 
  }
  catch (error) {
    console.error("Error creando material:", error)
  }
}


</script>

<style scoped>
* {
  font-family: Poppins;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  gap: 60px;
  padding: 20px;
  flex-wrap: wrap;
}

.presentacion {
  max-width: clamp(400px, 60%, 700px);
  text-align: center;
}

.titulo {
  font-size: 48px;
  color: #ff6b8a;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.subtitulo {
  font-size: 30px;
  color: rgb(70, 40, 110);
  line-height: 1.5;
  margin: 0;
}

.subtitulo-1 {
  font-weight: 600;
}

.subtitulo-2 {
  font-weight: 400;
}

.login-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  border: 1px solid #e9ecef;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
select {
  padding: 15px;
  font-size: 16px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  background-color: #ffffff;
  color: #495057;
}

input::placeholder,
select::placeholder {
  color: #6c757d;
}

input:focus,
select:focus {
  border-color: #ff6b8a;
  box-shadow: 0 0 0 2px rgba(255, 107, 138, 0.1);
}

.btn-principal {
  background-color: rgba(70, 40, 110, 1);
  color: white;
  border: none;
  padding: 15px;
  font-size: 14px;
  font-weight: bolder;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-principal:hover {
  background-color: #5a2d7a;
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    gap: 40px;
  }

  .presentacion {
    text-align: center;
    max-width: 100%;
  }

  .titulo {
    font-size: 36px;
  }

  .login-box {
    width: 100%;
    max-width: 350px;
  }
}
</style>
