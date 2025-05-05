import { updateCategory as updateCategoryRequest } from "../../services";
import toast from "react-hot-toast";

export const useUpdateCategory = () => {
    const updateCategory = async (id, data) => {
        try {
            const response = await updateCategoryRequest(id, data);
            
            if (response.error) {
                toast.error("Error al actualizar la categoría");
                return { error: true };
            }

            toast.success("Categoría actualizada correctamente");
            return response;
        } catch (err) {
            toast.error("Error inesperado al actualizar");
            return { error: true };
        }
    };

    return { updateCategory };
};