<template>
  <div class="login-container">
    <div class="presentacion">
      <h1 class="titulo">Pirka</h1>
      <p class="subtitulo subtitulo-1">Sistema de gestión de inventario.</p>
      <p class="subtitulo subtitulo-2">Controla y administra tu stock de forma simple y eficiente.</p>
    </div>
    <div class="login-box">
      <form @submit.prevent="loguearse">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="contrasenia" type="password" placeholder="Contraseña" required />
        <button type="submit" class="btn-principal">INICIAR SESIÓN</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { servicioLogin } from '@/services/login.service';
import { useRouter } from 'vue-router';
import { userStore } from '@/store/user';

const router = useRouter();
const store = userStore();

const email = ref('');
const contrasenia = ref('');

const loguearse = async () => {
  try {
    const resultado = await servicioLogin.login(email.value, contrasenia.value);
    console.log('Login exitoso', resultado);
    store.Loguear(resultado.nombre, resultado.rol);
    router.push({ name: 'home' });
  } catch (error) {
    console.log(error, 'Error al loguearse.');
  }
};

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
  margin: 0; /* elimina espacio excesivo */
}

.subtitulo-1 {
  font-weight: 600; /* un poco más gruesa (seminegrita) */
}

.subtitulo-2 {
  font-weight: 400; /* más liviana que la anterior */
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

input {
  padding: 15px;
  font-size: 16px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease;
  background-color: #ffffff;
  color: #495057;
}

input::placeholder {
  color: #6c757d;
}

input:focus {
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