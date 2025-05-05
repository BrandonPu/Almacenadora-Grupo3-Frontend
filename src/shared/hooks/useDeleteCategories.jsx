import { deleteCategory as deleteCategoryRequest } from "../../services";
import toast from "react-hot-toast";

export const useDeleteCategory = () => {
    const deleteCategory = async (id) => {
        try {
            const response = await deleteCategoryRequest(id);
            
            if (response.error) {
                toast.error("Error al eliminar categoría");
                return { error: true };
            }

            toast.success("Categoría eliminada correctamente");
            return response;
        } catch (err) {
            toast.error("Error inesperado al eliminar");
            return { error: true };
        }
    };

    return { deleteCategory };
};