import { useState, useEffect } from "react";
import { getProducts } from "../../services";

export const useProductView = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts();

            if (!response.error) {
                setProducts(response);
            } else {
                setError(response.message);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};
