import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerProduct as registerProductRequest } from "../../services";
import toast from "react-hot-toast";

export const useRegisterProducts = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const registerProduct = async (nameProduct, description, stock, nameCategory, price, entryDate, expirationDate) => {
        setIsLoading(true)

        const response = await registerProductRequest({nameProduct, description, stock, nameCategory, price, entryDate, expirationDate})
    
        setIsLoading(false)

        if(response.error){
            return toast.error(response.error?.response?.data || 'Ocurrio un error al registrar Producto, revise e intenta de nuevo')
        }

        const { productDetails } = response.data

        localStorage.setItem('product', JSON.stringify(productDetails));

        toast.success('Producto registrado Corretamente');

        navigate('/productPage', { replace: true });
        window.location.reload();
    }

    return {
        registerProduct,
        isLoading
    }
}