import { updateClient } from "../../services";
import toast from "react-hot-toast";

export const useClientUpdate = () => {
    const updateClients = async (id, data) =>{
        try {
            const response = await updateClient(id, data)

            if(response.error){
                toast.error("Error al actualizar Cliente");
                return {error: true}
            }

            toast.success("Cliente actualizaso correctamente")
            return response.data
        } catch (e) {
            toast.error("Error inesperado al Actualizar Cliente")
            return { error: true, e}
        }
    }

    return {updateClients}
}