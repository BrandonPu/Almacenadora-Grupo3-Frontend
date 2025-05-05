import { deleteClient } from "../../services";
import toast from "react-hot-toast";

export const useClientDelete = () => {
    const deleteClients = async(id) => {
        const response = await deleteClient(id)

        if(response.error){
            toast.error("Error al eliminar Cliente")
            return {error: true}
        }

        toast.success("Cliente eliminado correctamente")
        return response
    }
    return {deleteClients}
}