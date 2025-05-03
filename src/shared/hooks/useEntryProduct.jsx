import { entryProduct } from "../../services";
import toast from "react-hot-toast";

export const useEntryProduct = () => {
    const entryProductHandler = async (id, data) => {
        const response = await entryProduct(id, data);

        if (response.error) {
            toast.error(response.message || "Error al agregar stock");
            return { error: true };
        }

        toast.success("Stock agregado correctamente");
        return response;
    }

    return { entryProductHandler };
}