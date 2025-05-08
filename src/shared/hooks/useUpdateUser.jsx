import { useState } from 'react';
import { updateUser, changePassword } from '../../services'; 

export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const updateUserData = async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await updateUser(userData);

            if (response?.error) {
                setError(response.message || 'Error al actualizar el usuario');
            } else {
                const userStored = JSON.parse(localStorage.getItem('user'));
                const updatedUser = {
                    ...userStored,
                    ...response.data.user 
                };

                localStorage.setItem('user', JSON.stringify(updatedUser));
                setSuccess(true);
            }
        } catch (e) {
            setError(e?.response?.data?.message || 'Error inesperado');
        } finally {
            setLoading(false);
        }
        window.location.reload();
    };

    const updatePassword = async (passwordData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await changePassword(passwordData);

            if (response?.error) {
                setError(response.message || 'Error al cambiar la contraseña');
            } else {
                setSuccess(true);
            }
        } catch (e) {
            setError(e?.response?.data?.message || 'Error inesperado');
        } finally {
            setLoading(false);
        }
    };

    return {
        updateUserData,
        updatePassword,
        loading,
        error,
        success
    };
};