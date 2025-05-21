<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <router-link to="/login" class="nav-link" active-class="active-link">
          Inicio
        </router-link>
  </div>
</template>

<script setup >
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


</script>
