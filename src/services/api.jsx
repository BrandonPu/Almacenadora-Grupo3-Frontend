import axios from 'axios';
import { data } from 'react-router-dom';

const apiClient = axios.create({
    baseURL: "https://127.0.0.1:8000/almacenadora/v1",
    timeout: 5000
})

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