import { useState } from "react";
import { clientFrecuentSave as saveClientFrecuentRequest} from "../../services";
import toast from "react-hot-toast";

export const useClientFrecuentForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    
    const saveClientFrecuent = async(name, surname , email,phoneNumber)=>{
        setIsLoading(true)

        const response = await saveClientFrecuentRequest({name, surname , email,phoneNumber})

        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data?.message || 'Compras minima para ser un cliente frecuente es de 11 '
            )
        }

        toast.success('Cliente Frecuente Agregado correctamente')
    }

    return{
        saveClientFrecuent,
        isLoading
    }
}