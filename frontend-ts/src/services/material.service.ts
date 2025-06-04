import axios from "axios";
import type { DatosMateriales } from "@/modelos/material";

export const servicioMaterial = {
    crear: async (material: DatosMateriales) => {
        try {
            const respuesta = await axios.post('http://localhost:3000/api/material/crear', material);
            console.log('Material creado exitosamente.')
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al crear el material.')

        }
    },

    traerTodos: async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/material/traerTodosLosMateriales');
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al traer los materiales.')
        }
    },

    traerNombreProductos: async () => {
        try {
            const respuesta = await axios.get('http://localhost:3000/api/producto/traerNombresDeProductos');
            return respuesta.data;
        } catch (error) {
            console.error(error, 'Error al traer los nombres de productos.');
        }
    },

    eliminar: async (materialId: string) => {
        try {
            const respuesta = await axios.delete('http://localhost:3000/api/material/eliminarMaterial/' + materialId);
            console.log('Material eliminado.')
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al eliminar material.')

        }
    },

    editar: async (materialId: string, material: DatosMateriales) => {
        try {
            const respuesta = await axios.put(`http://localhost:3000/api/material/modificarMaterial/${materialId}`, material);
            console.log('Cambio guardado con éxito.')
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al editar el material.')
        }
    }
}