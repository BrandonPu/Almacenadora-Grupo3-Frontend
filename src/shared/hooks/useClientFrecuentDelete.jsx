import { clientFrecuentDelete } from "../../services";
import toast from "react-hot-toast";

export const useClientFrecuentDelete = () => {
    const deleteClientFre = async(id) => {
        const response = await clientFrecuentDelete(id)

        if(response.error){
            toast.error("Error al eliminar el cliente frecuente")
            return {error: true}
        }

        toast.success("Cliente frecuente eliminado correctamente")
        return response
    }

    return{deleteClientFre}
}