import { updateProduct as updateProductRequest } from "../../services";
import toast from "react-hot-toast";

export const useUpdateProduct = () => {
    
    const updateProduct = async (id, data) => {
        try {
            const response = await updateProductRequest(id, data);

            if (response.error) {
                toast.error("Error al actualizar el producto");
            }

            toast.success("Product Actualizado correctamente");
            return response.data;
        } catch (e) {
            toast.error(
                "Error inesperado al actualizar el producto revise y intentelo nuevamente");
            return { error: true, e };
        }
    };

    return { updateProduct };
};
