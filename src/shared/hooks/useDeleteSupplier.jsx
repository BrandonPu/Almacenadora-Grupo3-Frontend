import { deleteSuplier } from "../../services";
import toast from "react-hot-toast";

export const useDeleteSupplier = () => {
    const deleteSupplier = async (id) => {
        const response = await deleteSuplier(id);

        if (response.error) {
            toast.error("Error al eliminar proveedor");
            return { error: true };
        }

        toast.success("Proveedor eliminado correctamente");
        return response;
    };

    return { deleteSupplier };
};
