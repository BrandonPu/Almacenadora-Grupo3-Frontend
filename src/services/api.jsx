import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/almacenadora/v1",
    timeout: 5000,
    headers: { "Cache-Control": "no-cache, no-store, must-revalidate" }
});


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

export const suplierView = async ({ nameSupplier = "", entryDate = "" } = {}) => {
    try {
            const params = {};
            if (nameSupplier) params.nameSupplier = nameSupplier;
            if (entryDate) params.entryDate = entryDate;
    
            const { data } = await apiClient.get('/suppliers/viewSuplier', { params });
            return Array.isArray(data?.suppliers)
                ? data.suppliers
                : { error: true, message: "Error: la respuesta no es un array válido" };
        } catch (e) {
            return {
                error: true,
                e
            }
        }
}

export const addSupplier = async (data) => {
    try {
        return await apiClient.post('/suppliers/addSuplier', data)
    } catch (error) {
        return {
            error: true,
            message: error.response?.data || "Error al registrar al Proveedor"
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

export const getProducts = async ({ nameProduct = "", entryDate = "" } = {}) => {
    try {
        const params = {};
        if (nameProduct) params.nameProduct = nameProduct;
        if (entryDate) params.entryDate = entryDate;

        const { data } = await apiClient.get("/products/productView", { params });
        return Array.isArray(data?.product)
            ? data.product
            : { error: true, message: "Error: la respuesta no es un array válido" };
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const registerProduct = async (productData) => {
    try {
        return await apiClient.post("/products/addProduct", productData);
    } catch (error) {
        return {
            error: true,
            message: error.response?.data || "Error al registrar el producto"
        };
    }
};

export const deleteProduct = async (id) => {
    try {
        const response  = await apiClient.delete(`/products/deleteProduct/${id}`, {
            data: { confirmDeletion: true },
        });
        return response.data;
    } catch (e) {
        return { error: true, e }
    }
}

export const updateProduct = async (id, data) => {
    try {
        return await apiClient.put(`/products/updateProduct/${id}`, data);
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const entryProduct = async (id, data) => {
    try {
        const response = await apiClient.put(`/products/productEntryRegistration/${id}`, data);
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.message || "Error al agregar stock"
        };
    }
};

export const getCategories = async ({ nameCategory = "", entryDate = ""} = {}) => {
    try {
        const params = {};
        if (nameCategory) params.nameCategory = nameCategory;
        if (entryDate) params.entryDate = entryDate;

        const { data } = await apiClient.get("/categories/", { params });
        return Array.isArray(data?.category)
            ? data.category
            : { error: true, message: "Error: la respuesta no es un array válido" };
    } catch (e) {
        return {
            error: true,
            e
        }
    }
};

export const addCategory = async (categoryData) => {
    try {
        return await apiClient.post('/categories/', categoryData);
    } catch (error) {
        return {
            error: true, 
            message: error.response?.data?.message || "Error al registrar la categoria"
        };
    }
};

export const updateCategory = async (id, data) => {
    try {
        return await apiClient.put(`/categories/${id}`, data);
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.message || error.message
        };
    }
};

export const deleteCategory = async (id) => {
    try {
        const response  = await apiClient.delete(`/categories/${id}`, {
            data: { confirmDeletion: true },
        });
        return response.data;
    } catch (e) {
        return { error: true, e }
    }
}

export const exitProduct = async (id, data) => {
    try {
        const response = await apiClient.post(`/products/productExitRegistration/${id}`, data);
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.message || "Error al registrar salida de stock"
        };
    }
};

export const getMovementHistory = async () => {
    try {
        const response = await apiClient.get("/products/historyProductView");
        return response.data;
    } catch (error) {
        return {
            error: true,
            message: error.response?.data?.message || "Error al obtener el historial de movimientos"
        };
    }
};