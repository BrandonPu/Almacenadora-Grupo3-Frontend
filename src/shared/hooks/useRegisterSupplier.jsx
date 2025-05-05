import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSupplier } from '../../services';
import toast from 'react-hot-toast';

export const useRegisterSupplier = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const registerSupplier = async (supplierData) => {
        setIsLoading(true);

        const response = await addSupplier(supplierData);

        setIsLoading(false);

        if(response.error) {
            return toast.error(response.error?.response?.data || 'Error al registrar al proveedor');
        }
        toast.success("Categoria registrada correctamente");
        navigate('/supplierPage', { replace: true });
        window.location.reload()

    };

    return {
        registerSupplier,
        isLoading
    };
};