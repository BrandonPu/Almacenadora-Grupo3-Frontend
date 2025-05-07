import { useEffect, useState } from "react";
import { getUser } from "../../services";

export const useUserView = () => {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () => {
        setIsLoading(true);
        const response = await getUser();

        if (response.error) {
            console.error("Error al obtener Usuarios", response.e);
        }else {
            setUser(response.data.users)
        }

        setIsLoading(false)
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return {
        user,
        isLoading,
    };
}