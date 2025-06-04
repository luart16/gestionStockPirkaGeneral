<template>
    <div v-if="store.Logueado"><!--El usuario debe estar logueado para que se muestre lo que está dentro de este div-->
        <div v-if="store.Rol == 'administrador'">
            <NavBar />
            <div class="login-container">
                <div class="presentacion">
                    <h1 class="titulo">Productos</h1>
                    <router-link to="/crearProducto">
                        <button class="btn-provisorio">Crear Nuevo Producto</button>
                    </router-link>
                    <p class="subtitulo subtitulo-1">Listado de productos registrados en el sistema.</p>
                    <p>***** aquí poner filtrado por tipo (piedra, placa, piso) y por nombre</p>
                </div>
                <div class="login-box">
                    <table class="tabla-estado">
                        <thead>
                            <tr>
                                <th>Tipo de Producto</th>
                                <th>Nombre de Producto</th>
                                <th>Color</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="producto in productosExistentes" :key="producto._id">
                                <td>{{ producto.tipoProducto }}</td>
                                <td>{{ producto.nombre }}</td>
                                <td>{{ producto.color }}</td>
                                <td>{{ producto.descripcion }}</td>
                                <td>{{ producto.precio }}</td>
                                <td>
                                    <button @click="editarProducto(producto._id)" class="btn-principal">Editar</button>
                                    <button @click="eliminarProducto(producto._id)"
                                        class="btn-principal">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>


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
import type { DatosProductos } from '@/modelos/producto';
import { ref, onMounted } from 'vue';
import { servicioProducto } from '@/services/producto.service';

const store = userStore();

const productosExistentes = ref < DatosProductos[] > ([]);

const traerTodos = async () => {
    try {
        const respuesta = await servicioProducto.traerTodos();
        productosExistentes.value = respuesta;
    }
    catch (error) {
        console.error("Error al traer los productos:", error)

    }

}

const eliminarProducto = async (productoId: string) => {
    try {
        const respuesta = await servicioProducto.eliminar(productoId);
        traerTodos();
    }
    catch (error) {
        console.error("Error al eliminar producto:", error)
    }
}
const editarProducto = async (productoId: string) => {
    try {

        //completarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

    }
    catch (error) {
        console.error("Error al editar producto:", error)
    }
}
onMounted(() => {
    traerTodos();
})

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

.login-box {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: clamp(300px, 90%, 900px);
    border: 1px solid #e9ecef;
    overflow-x: auto;
}

.tabla-estado {
    width: 100%;
    border-collapse: collapse;
}

.tabla-estado th,
.tabla-estado td {
    padding: 12px;
    border: 1px solid #dee2e6;
    text-align: left;
}

.tabla-estado th {
    background-color: #f8f9fa;
    color: #333;
}

.btn-principal {
    background-color: rgba(70, 40, 110, 1);
    color: white;
    border: none;
    padding: 10px 14px;
    font-size: 14px;
    font-weight: bolder;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
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
        max-width: 100%;
    }
}
</style>