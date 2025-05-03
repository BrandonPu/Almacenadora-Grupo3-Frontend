import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSuplier as saveSuplierRequest} from "../../services";
import toast from "react-hot-toast";

export const useProviderForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const saveSuplier = async (nameSupplier, emailSupplier, phoneNumber ,nameProduct) => {
        setIsLoading(true);

        const response = await saveSuplierRequest({ nameSupplier, emailSupplier, phoneNumber ,nameProduct });

        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response?.e?.response?.data?.message || 'Ocurrió un error al agregar proveedor'
            );
        }
        
        toast.success('Proveedor agregado correctamente');
        navigate('/dashboardPage');
    };

    return {
        saveSuplier,
        isLoading
    };
};
