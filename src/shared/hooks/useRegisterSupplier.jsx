import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSupplier as addSupplierRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegisterSupplier = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addSupplier = async (nameSupplier, emailSupplier, phoneNumber, nameProduct) => {
        setIsLoading(true);
        
        const response = await addSupplierRequest({ 
            nameSupplier, 
            emailSupplier, 
            phoneNumber, 
            nameProduct 
        });
        
        setIsLoading(false);

        if(response.error){
            return toast.error(response.error?.response?.data || 'Error al registrar proveedor');
        }

        toast.success('Proveedor registrado correctamente');
        navigate('/supplierPage', { replace: true });
        window.location.reload();
    };

    return {
        addSupplier,
        isLoading
    };
};