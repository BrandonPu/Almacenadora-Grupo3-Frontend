import { useState, useEffect, useCallback } from "react";
import { expirationProduct } from "../../services";

export const useExpirationProduct = (initialMonth = 1) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [month, setMonth] = useState(initialMonth);

    const fetchProducts = useCallback(async (targetMonth = month) => {
        setLoading(true);
        try {
            const response = await expirationProduct(targetMonth);
            if (!response.error) {
                setProducts(response);
                setError(null);
            } else {
                setProducts([]);
                setError(response.message || "Error desconocido.");
            }
        } catch (err) {
            setProducts([]);
            setError("Hubo un problema al obtener los datos.");
        } finally {
            setLoading(false);
        }
    }, [month]);

    useEffect(() => {
        fetchProducts();
    }, [month, fetchProducts]);

    return {
        products,
        loading,
        error,
        month,
        setMonth
    };
};
