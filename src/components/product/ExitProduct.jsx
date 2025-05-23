import React, { useState, useEffect } from "react";
import {
    useProductView,
    useExitProduct,
    useClientPage,
    useClientFrecuentPage,
} from "../../shared/hooks";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { validateExitProduct } from "../../shared/validators/validateExitStock";

export const ExitProduct = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState("");
    const [quantity, setQuantity] = useState("");
    const [reason, setReason] = useState("");
    const [destination, setDestination] = useState("");
    const [clientType, setClientType] = useState("");
    const [email, setEmail] = useState("");

    const { exitProductHandler } = useExitProduct();
    const { products: productList, error } = useProductView();
    const { clients, isLoading: clientsLoading } = useClientPage();
    const { clientFre, isLoading: clientsFrecuentLoading } = useClientFrecuentPage();

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

        const validation = validateExitProduct(
            Number(quantity),
            selectedProductId,
            products
        );
        if (!validation.valid) {
            toast.error(validation.message);
            return;
        }

        if (
            !selectedProductId ||
            !quantity ||
            Number(quantity) <= 0 ||
            !reason ||
            !destination ||
            !clientType ||
            !email
        ) {
            toast.error("Completa todos los campos correctamente");
            return;
        }

        const response = await exitProductHandler(selectedProductId, {
            quantity: Number(quantity),
            reason,
            destination,
            clientType,
            email,
        });

        if (response.error) {
            toast.error("Error al registrar salida de stock");
        } else {
            toast.success("Salida de stock registrada correctamente");
            navigate("/productPage");
            setQuantity("");
            setReason("");
            setDestination("");
            setClientType("");
            setEmail("");
            setSelectedProductId("");
        }
    };

    const isFrecuent = clientType === "frecuent";
    const selectedClients = isFrecuent ? clientFre : clients;
    const isLoading = isFrecuent ? clientsFrecuentLoading : clientsLoading;

    return (
        <div className="checkoutproduct-container">
            <h2>Registrar Salida de Producto</h2>
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
                    <label>Cantidad a retirar:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Ej. 10"
                    />
                </div>

                <div>
                    <label>Razón de la salida:</label>
                    <input
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="Ej. Daño, Venta, etc."
                    />
                </div>

                <div>
                    <label>Destino:</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Ej. Cliente, Almacén, etc."
                    />
                </div>

                <div>
                    <label>Tipo de Cliente:</label>
                    <select
                        className="form-select"
                        value={clientType}
                        onChange={(e) => {
                            setClientType(e.target.value);
                            setEmail(""); 
                        }}
                    >
                        <option value="">-- Selecciona un tipo de cliente --</option>
                        <option value="client">Cliente</option>
                        <option value="frecuent">Cliente Frecuente</option>
                    </select>
                </div>

                <div>
                    <label>Email del Cliente:</label>
                    <select
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!clientType || isLoading}
                    >
                        <option value="">-- Selecciona un email --</option>
                        {selectedClients?.map((client) => (
                            <option key={client._id} value={client.email}>
                                {client.email} - {client.name || client.fullName}
                            </option>
                        ))}
                    </select>
                    {!clientType && (
                        <p className="info-message">Selecciona un tipo de cliente primero</p>
                    )}
                    {isLoading && <p className="loading">Cargando clientes...</p>}
                </div>

                <div>
                    <button type="submit">Registrar Salida</button>
                </div>
            </form>
        </div>
    );
};