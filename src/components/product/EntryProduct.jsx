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
        <div className="entryproducts-container">
            <h2 className="entry-title">Agregar Stock a Producto</h2>
            <form className="entry-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Seleccionar Producto:</label>
                    <select
                        className="form-select"
                        value={selectedProductId}
                        onChange={(e) => setSelectedProductId(e.target.value)}
                    >
                        <option value="">-- Selecciona un producto --</option>
                        {products.map((product) => (
                            <option key={product._id} value={product._id}>
                                {product.nameProduct} (Stock actual: {product.stock})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Cantidad a agregar:</label>
                    <input
                        type="number"
                        className="form-input"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Ej. 10"
                        min="1"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Agregar Stock
                </button>
            </form>
        </div>
    );
};