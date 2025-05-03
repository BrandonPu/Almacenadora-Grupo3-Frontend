import { deleteProduct as deleteProductRequest} from "../../services";
import toast from "react-hot-toast";

export const useDeleteProduct = () => {
    const deleteProduct = async (id) => {
        try {
            const response = await deleteProductRequest(id);

            if (response.error) {
                toast.error("Error al eliminar Producto");
                return { error: true };
            }

            toast.success("Producto eliminado correctamente");
            return response;

        } catch (err) {
            toast.error("Ocurrió un error inesperado");
            return { error: true };
        }
    };

    return { deleteProduct };
};
