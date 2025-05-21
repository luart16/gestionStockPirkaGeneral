<template>
  <div class="login-container">
    <div class="presentacion">
      <h1 class="titulo">CriptoMarket</h1>
      <p class="subtitulo">
        Operá con criptomonedas de forma segura, confiable y desde cualquier lugar.
      </p>
    </div>

    <div class="login-box">
      <form @submit.prevent="loguearse">
        <input v-model="email" type="text" placeholder="Email" required />
        <input v-model="contrasenia" type="text" placeholder="Contraseña" required />
        <button type="submit" class="btn-principal">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'; //esto es para rastrear cambios.

import { servicioLogin } from '@/services/login.service';


const email = ref(''); //le pongo el ref para que si cambia el email me lo cambie
const contrasenia = ref('');

const loguearse = async () => {
  try{
    await servicioLogin.login(email.value, contrasenia.value )
  }
  catch(error){
    console.log(error, 'Error al loguearse.')
  }
}

</script>

<style scoped>
/* al poner el asterisco me aseguro que toda esta página use la misma letra */
* {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #c2dedd;
  gap: 40px;
  padding: 20px;
  flex-wrap: wrap;
}

.presentacion {
  max-width: 400px;
  text-align: left;
}

.titulo {
  font-size: 42px;
  color: #1a237e;
  margin-bottom: 10px;
  font-weight: 700;
}

.subtitulo {
  font-size: 18px;
  color: #263238;
}

.login-box {
  background-color: #ffffff;
  padding: 28px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 360px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input {
  padding: 12px;
  font-size: 15px;
  border: 1px solid #cfd8dc;
  border-radius: 4px;
  outline: none;
}

input:focus {
  border-color: #3949ab;
  box-shadow: 0 0 0 2px rgba(57, 73, 171, 0.1);
}

.btn-principal {
  background-color: #1a237e;
  color: white;
  border: none;
  padding: 12px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-principal:hover {
  background-color: #0d154c;
}


hr {
  margin: 12px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
}
</style>
