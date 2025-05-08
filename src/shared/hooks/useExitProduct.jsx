import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { exitProduct as exitProductRequest} from "../../services";
import toast from "react-hot-toast";

export const useExitProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const exitProductHandler = async (id, { quantity, reason, destination, clientType, email }) => {
        setIsLoading(true);

        const response = await exitProductRequest(id, { quantity, reason, destination, clientType, email });

        setIsLoading(false);

        if (response.error) {
            toast.error(response.message || "Error al registrar salida de stock");
            return { error: true };
        }

        toast.success("Salida de stock registrada correctamente");
        navigate('/productPage', { replace: true });
        window.location.reload();
    };

    return { exitProductHandler, isLoading };
};