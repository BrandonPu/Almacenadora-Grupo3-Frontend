import { exitProduct } from "../../services";
import toast from "react-hot-toast";

export const useExitProduct = () => {
    const exitProductHandler = async (id, { quantity, reason, destination, clientType, email }) => {
        const response = await exitProduct(id, { quantity, reason, destination, clientType, email });

        if (response.error) {
            toast.error(response.message || "Error al registrar salida de stock");
            return { error: true };
        }

        toast.success("Salida de stock registrada correctamente");
        return response;
    };

    return { exitProductHandler };
};