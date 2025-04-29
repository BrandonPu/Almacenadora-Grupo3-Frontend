import axios from 'axios';
import { data } from 'react-router-dom';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/almacenadora/v1",
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