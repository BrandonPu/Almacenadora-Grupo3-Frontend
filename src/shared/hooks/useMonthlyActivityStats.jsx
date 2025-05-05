import { useState, useEffect } from "react";
import { getMonthlyActivityStats } from "../../services";

export const useMonthlyActivityStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStats = async () => {
        setLoading(true);
        setError(null);

        const response = await getMonthlyActivityStats();

        if (response.error) {
            setError(response.message || "Error al obtener estadísticas");
            setStats(null);
        } else {
            setStats(response);
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return {
        stats,
        loading,
        error,
        refetch: fetchStats
    };
};