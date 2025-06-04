import axios from "axios";
import type { DatosProductos } from "@/modelos/producto";

export const servicioProducto = {
      crear: async (producto: DatosProductos) => {
          try {
              const respuesta = await axios.post('http://localhost:3000/api/producto/crear', producto);
              console.log('Producto creado exitosamente.')
              return respuesta.data;
         }
          catch (error) {
              console.log(error, 'Error al crear el producto.')

         }
      },

      traerTodos: async () => {
          try {
              const respuesta = await axios.get('http://localhost:3000/api/producto/traerTodosLosProductos');
              return respuesta.data;
          }
          catch (error) {
              console.log(error, 'Error al traer productos.')
          }
      },

      traerPorTipo: async (tipo: string) => {
    try {
        const respuesta = await axios.get(`http://localhost:3000/api/producto/traerPorTipo`, {
            params: { tipo }
        });
        return respuesta.data;
    } catch (error) {
        console.error(error, 'Error al traer productos por tipo.');
    }
},

      eliminar: async (productoId: string) => {
          try {
              const respuesta = await axios.delete('http://localhost:3000/api/producto/eliminarProducto/' + productoId);
              console.log('Producto eliminado.')
              return respuesta.data;
          }
          catch (error) {
              console.log(error, 'Error al eliminar producto.')

          }
      },

      editar: async (productoId: string, producto: DatosProductos ) => {
          try{
              const respuesta = await axios.put(`http://localhost:3000/api/producto/modificarProducto/${productoId}`,producto);
              console.log('Cambio guardado con éxito.')
              return respuesta.data;
          }
          catch(error){
              console.log(error, 'Error al editar el producto.')
          }
      }
}