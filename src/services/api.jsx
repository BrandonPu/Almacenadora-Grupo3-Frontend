import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/almacenadora/v1",
    timeout: 5000
})

apiClient.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem('user');
        if (user) {
            const token = JSON.parse(user).token;
            config.headers['x-token'] = token; 
        }
        return config;
    },
    (e) => Promise.reject(e)
);

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

export const suplierView = async () => {
    try {
        return await apiClient.get('/suppliers/viewSuplier');
    } catch (e) {
        return {
            error: true,
            e
        }
    } 
}

export const saveSuplier = async (data) => {
    try {
        return await apiClient.post('/suppliers/addSuplier', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteSuplier = async (id) => {
    try {
      const response = await apiClient.delete(`/suppliers/deleteSupiler/${id}`, {
        data: { confirmDeletion: true },
      });
      return response.data;
    } catch (e) {
      return { error: true, e }
    }
}

export const updateSuplier = async(id, data) => {
    try {
        return await apiClient.put(`/suppliers/updateSuplier/${id}`, data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}
