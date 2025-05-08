import { clientFrecuentUpdate } from "../../services";
import toast from "react-hot-toast";

export const useClientFrecuentUpdate = () => {
    const updateClientFre = async(id, data) =>{
        const response = await clientFrecuentUpdate(id, data)
        if(response.error){
            toast.error("Error al Actualizar cliente Frecuente")
            return {error: true}
        }

        toast.success("Cliente Actualizado Correctamente")

    }

    return {updateClientFre}
}