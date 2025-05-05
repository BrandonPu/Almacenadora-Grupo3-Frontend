import { useEffect, useState } from "react";
import { clientView } from "../../services";

export const  useClientPage = () => {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchClients = async () => {
        setIsLoading(true);
        const response = await clientView();
        if (response.error) {
            console.error("Error al obtener clientes:", response.e);
        } else {
            setClients(response.data.clients);
        }
        setIsLoading(false);
    }
    
    useEffect(() => {
        fetchClients();
    }, [])

    return {
        clients,
        isLoading
    }
}