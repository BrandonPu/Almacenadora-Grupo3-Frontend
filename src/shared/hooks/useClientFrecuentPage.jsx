import { useEffect, useState } from "react";
import { clientFrecuentView } from "../../services";

export const useClientFrecuentPage = () => {
    const [clientFre, setClientFre] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchClientsFrecuents = async () => {
        setIsLoading(true);
        const response = await clientFrecuentView();
    
        if (response.error) {
            console.error("Error al obtener Clientes Frecuentes", response.e);
        } else {
            setClientFre(response.data.frecuentClients);
        }
    
        setIsLoading(false);
    };

    useEffect(() => {
        fetchClientsFrecuents();
    }, []);

    return {
        clientFre,
        isLoading,
        fetchClientsFrecuents
    };
};
