import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory as addCategoryRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegisterCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const addCategory = async (nameCategory, description) => {
        setIsLoading(true);
        
        const response = await addCategoryRequest({ nameCategory, description });
        
        setIsLoading(false);

        if(response.error){
            return toast.error(response.error?.response?.data || 'Category already exists');
        }

        toast.success('Categoría registrada correctamente');
        navigate('/categoriesPage', { replace: true });
        window.location.reload();
    }

    return {
        addCategory,
        isLoading
    }
}