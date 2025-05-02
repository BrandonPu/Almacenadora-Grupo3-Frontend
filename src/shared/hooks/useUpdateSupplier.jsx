import { updateSuplier } from "../../services";
import toast from "react-hot-toast";

export const useUpdateSupplier = () => {
    const updateSupplier = async (id, data) => {
        try {
            const response = await updateSuplier(id, data);

            if (response.error) {
                toast.error("Error al actualizar proveedor");
                return { error: true };
            }

            toast.success("Proveedor actualizado correctamente");
            return response.data; 
        } catch (e) {
            toast.error("Error inesperado al actualizar proveedor");
            return { error: true, e };
        }
    };

    return { updateSupplier };
};
