import { useState } from "react";
import { deleteUser } from "../../services"; 

export const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleDeleteUser = async (id) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        
        const response = await deleteUser(id);
        
        if (response.error) {
            setError(response.message || "Error al eliminar el usuario");
        } else {
            setSuccess(true);
            window.location.reload(); 
        }
        setLoading(false);
    };

    return {
        handleDeleteUser,
        loading,
        error,
        success,
    };
};