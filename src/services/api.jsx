import axios from 'axios';
import { data } from 'react-router-dom';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/almacenadora/v1",
    timeout: 5000,
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
});


export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async(data) =>{
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getProducts = async () => {
    try {
        const { data } = await apiClient.get("/products/productView");
        return Array.isArray(data?.product) ? data.product : { error: true, message: "Error: la respuesta no es un array válido" };
    } catch ({ response }) {
        return { error: true, message: response?.data || "Error al obtener productos" };
    }
};
