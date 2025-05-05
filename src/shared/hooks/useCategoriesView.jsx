import { useState, useEffect } from "react";
import { getCategories } from "../../services";

export const useCategoryView = (initialFilters = {}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);

    const fetchCategories = async (currentFilters = filters) => {

        setLoading(true);

        const response = await getCategories(currentFilters);
        
        if (!response.error) {
            setCategories(response);
        } else {
            setError(response.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchCategories();
    }, [filters]);

    return {
        categories,
        loading,
        error,
        setFilters,
        fetchCategories
    };
};