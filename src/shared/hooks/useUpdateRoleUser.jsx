import { useState } from "react";
import { updateUserRole } from "../../services"; 

export const useUpdateRoleUser = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const updateRole = async (userId, newRole) => {
        setLoading(true);
        setSuccess(false);
        setError(null);

        try {
            const response = await updateUserRole(userId, { role: newRole });
            setSuccess(true);
            return response;
        } catch (err) {
            setError(err.message || "Ocurrió un error al actualizar el rol");
            return { error: true };
        } finally {
            setLoading(false);
        }
    };

    return {
        updateRole,
        loading,
        success,
        error,
    };
};
