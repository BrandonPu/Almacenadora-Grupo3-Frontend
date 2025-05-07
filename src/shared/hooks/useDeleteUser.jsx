import { deleteUser as deleteUserRequest} from "../../services"; 
import toast from "react-hot-toast";

export const useDeleteUser = () => {
    const handleDeleteUser = async (id) => {
        try {
            const response = await deleteUserRequest(id);
            
            if (response.error) {
                toast.error("Error al eliminar eñ usuario");
                return { error: true };
            }

            toast.success("usuario eliminado correctamente");
            return response;
        } catch (err) {
            toast.error("Error inesperado al eliminar");
            return { error: true };
        }
    };

    return { handleDeleteUser };
};