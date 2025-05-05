import { updateSuplier as updateSupplierRequest } from "../../services";
import toast from "react-hot-toast";

export const useUpdateSupplier = () => {
    const updateSupplier = async (id, data) => {
        try {
            const response = await updateSupplierRequest(id, data);
            
            if (response.error) {
                toast.error("Error al actualizar el proveedor");
                return { error: true };
            }

            toast.success("Proveedor actualizado correctamente");
            return response;
        } catch (err) {
            toast.error("Error inesperado al actualizar");
            return { error: true };
        }
    };

    return { updateSupplier };
};