import { useState, useEffect } from "react";
import { getProductMovementsSummary } from "../../services";

export const useProductMovementsSummary = (initialStartDate, initialEndDate) => {
    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSummary = async () => {
        if (!startDate || !endDate) return;

        setLoading(true);
        setError(null);

        const response = await getProductMovementsSummary(startDate, endDate);

        if (response.error) {
            setError(response.message || "Ocurrió un error");
            setSummary(null);
        } else {
            setSummary(response.summary || null);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchSummary();
    }, [startDate, endDate]);

    return {
        summary,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        fetchSummary
    };
};
