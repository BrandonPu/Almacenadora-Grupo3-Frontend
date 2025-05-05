import { useState, useEffect } from "react";
import { suplierView } from "../../services";

export const useSupplierView = (initialFilters = {}) => {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState(initialFilters);

    const fetchSuppliers = async (currentFilters = filters) => {
        setLoading(true);

        const response = await suplierView(currentFilters);
        
        if (!response.error) {
            setSuppliers(response);
        } else {
            setError(response.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchSuppliers();
    }, [filters]);

    return {
        suppliers,
        loading,
        error,
        setFilters,
        fetchSuppliers
    };
};