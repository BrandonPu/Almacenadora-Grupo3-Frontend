import { useEffect, useState } from "react";
import { getMostActiveProducts } from "../../services";

export const useMostActiveProduct = () => {
    const [mostEntries, setMostEntries] = useState([]);
    const [mostExits, setMostExits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getMostActiveProducts();

            if (response?.success) {
                const entries = (response.mostEntries || []).map(({ nameProduct, totalEntries }) => ({
                    nameProduct,
                    totalEntries,
                }));

                const exits = (response.mostExits || []).map(({ nameProduct, totalExits }) => ({
                    nameProduct,
                    totalExits,
                }));

                setMostEntries(entries);
                setMostExits(exits);
                setError(null);
            } else {
                setError(response?.message || "Error al obtener productos más activos");
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        mostEntries,
        mostExits,
        loading,
        error
    };
};