import { useEffect, useState } from "react";
import { productView } from "../../services/api";

export const useProductViewPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await productView();

                if (response.error) {
                    throw response.e;
                }
                const filteredProducts = response.data.product.map(product => ({
                    nameProduct: product.nameProduct,
                    stock: product.stock,
                    price: product.price
                }));

                setProducts(filteredProducts);
            } catch (err) {
                console.error("Error al cargar el Informe de inventario:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading, error };
};
