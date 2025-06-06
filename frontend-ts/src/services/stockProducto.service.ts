import axios from "axios";
import type { DatosStockProductos } from "@/modelos/stockProducto";

export const servicioStockProducto = {
    crear: async (stockProducto: DatosStockProductos) => {
        try {
            const respuesta = await axios.post('http://localhost:3000/api/stockProducto/crear', stockProducto);
            console.log('Stock de producto creado exitosamente.')
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al crear el stock de producto.')

        }
    },
}