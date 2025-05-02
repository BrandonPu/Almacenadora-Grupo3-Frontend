import { useEffect, useState } from "react";
import { suplierView } from "../../services";


export const useProviderPage = () => {
    const [providers, setProviders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadProviders = async () => {
        const response = await suplierView();
        if (response.error) {
            console.error("Error al obtener proveedores", response.e);
            setProviders([]);
        } else {
            setProviders(response.data.suppliers); 
        }

        setIsLoading(false);
    };

    useEffect(() => {
        loadProviders();
    }, []);

    return {
        providers,
        isLoading,
        reload: loadProviders
    };
}