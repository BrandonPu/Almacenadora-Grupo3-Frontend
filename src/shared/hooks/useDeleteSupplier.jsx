import { deleteSuplier as deleteSupplierRequest } from "../../services";
import toast from "react-hot-toast";

export const useDeleteSupplier = () => {
    const deleteSupplier = async (id) => {
        try {
            const response = await deleteSupplierRequest(id);
            
            if (response.error) {
                toast.error("Error al eliminar proveedor");
                return { error: true };
            }

            toast.success("Proveedor eliminado correctamente");
            return response;
        } catch (err) {
            toast.error("Error inesperado al eliminar");
            return { error: true };
        }
    };

    return { deleteSupplier };
};