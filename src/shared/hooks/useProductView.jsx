import { useState, useEffect } from "react";
import { getProducts } from "../../services";

export const useProductView = (initialFilters = {}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);

    const fetchProducts = async (currentFilters = filters) => {
        
        setLoading(true);
        
        const response = await getProducts(currentFilters);

        if (!response.error) {
            setProducts(response);
        } else {
            setError(response.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
    }, [filters]);

    return {
        products,
        loading,
        error,
        setFilters,
        fetchProducts
    };
};
