import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { entryProduct as entryProductRequest } from "../../services";
import toast from "react-hot-toast";

export const useEntryProduct = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const navigate = useNavigate();

    const entryProductHandler = async (id, data) => {
        setIsLoading(true);
        const response = await entryProductRequest(id, data);
        setIsLoading(false);

        if (response.error) {
            toast.error(response.message || "Error al agregar stock");
            return { error: true };
        }

        toast.success("Stock agregado correctamente");
        navigate('/productPage', { replace: true });
        window.location.reload();
    }

    return { entryProductHandler, isLoading };
}