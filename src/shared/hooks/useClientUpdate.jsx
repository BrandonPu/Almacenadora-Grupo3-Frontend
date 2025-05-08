import { updateClient } from "../../services";
import toast from "react-hot-toast";

export const useClientUpdate = () => {
    const updateClients = async (id, data) =>{
        const response = await updateClient(id, data)
        if(response.error){
            toast.error("Error al actualizar Cliente");
            return {error: true}
        }
        toast.success("Cliente actualizado correctamente")

    }

    return {updateClients}
}