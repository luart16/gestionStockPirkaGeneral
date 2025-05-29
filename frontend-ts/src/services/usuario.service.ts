import axios from "axios";
import type { DatosUsuarios } from "@/modelos/usuario";

export const servicioUsuario = {
    crear: async (usuario: DatosUsuarios) => {
        try {
            const respuesta = await axios.post('http://localhost:3000/api/usuario/crear', usuario);
                console.log('Usuario creado exitosamente.')
            return respuesta.data;
        }
        catch (error) {
            console.log(error, 'Error al crear usuario.')

        }
    },

    traerTodos: async () =>{
        try{
            const respuesta = await axios.get('http://localhost:3000/api/usuario/traerTodosLosUsuarios');
            return respuesta.data;
        }
        catch(error){
            console.log(error, 'Error al traer usuarios.')
        }
    }

}