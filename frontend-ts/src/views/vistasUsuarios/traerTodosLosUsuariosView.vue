<template>
    <div v-if="store.Logueado">
        <NavBar />
        <div class="estado-container">
            <h1>Usuarios creados</h1>

            <table class="tabla-estado">
                <thead>
                    <tr>
                        <th>Nombre usuario</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th v-if="store.Rol=='administrador'">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in usuariosExistentes" :key="usuario._id">
                        <td>{{ usuario.nombreUsuario }}</td>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.rol }}</td>                        
                        <th v-if="store.Rol== 'administrador'">
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            
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
import { servicioUsuario } from '@/services/usuario.service';
import type { DatosUsuarios } from '@/modelos/usuario';
import { ref,onMounted } from 'vue';

const store = userStore();

const usuariosExistentes = ref<DatosUsuarios[]>([]);

const traerTodos = async () =>{
    try{
        const respuesta = await servicioUsuario.traerTodos();
        usuariosExistentes.value = respuesta;
    }
    catch(error){
        console.error("Error al traer los usuarios:", error)

    }

}

onMounted(()=> {
    traerTodos();
})

</script>