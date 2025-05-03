import React, { useState, useEffect } from "react";
import { useProductView, useEntryProduct } from "../../shared/hooks";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const EntryProduct = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState("");
    const [quantity, setQuantity] = useState("");

    const { entryProductHandler } = useEntryProduct();
    const { products: productList, error } = useProductView();
    const navigate = useNavigate();

    useEffect(() => {
        if (productList?.length) {
            setProducts(productList);
        } else if (error) {
            toast.error("Error al cargar los productos");
        }
    }, [productList, error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedProductId || !quantity || Number(quantity) <= 0) {
            toast.error("Completa todos los campos correctamente");
            return;
        }

        const response = await entryProductHandler(selectedProductId, {
            quantity: Number(quantity),
        });

        if (response.error) {
            toast.error("Error al agregar stock");
        } else {
            toast.success("Stock agregado correctamente");
            navigate("/productPage");
            setQuantity("");
            setSelectedProductId("");
        }
    };

    return (
        <div>
            <h2>Agregar Stock a Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Seleccionar Producto:</label>
                    <select
                        value={selectedProductId}
                        onChange={(e) => setSelectedProductId(e.target.value)}
                    >
                        <option value="">-- Selecciona un producto --</option>
                        {products.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.nameProduct}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Cantidad a agregar:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Ej. 10"
                    />
                </div>

                <div>
                    <button type="submit">Agregar Stock</button>
                </div>
            </form>
        </div>
    );
};