import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveClient as saveClientRequest} from "../../services";
import toast from "react-hot-toast";

export const useClientForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const saveClient = async(userData)=>{
        setIsLoading(true)

        const response = await saveClientRequest({userData})
        
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data?.message || 'Ocurrio un error al agregar Cliente'
            )
        }

        toast.success('Cliente agregado correctamente')
        navigate('/clietPage', { replace: true });
        window.location.reload();
    }

    return{
        saveClient,
        isLoading
    }
}