import React from "react";
import { useProductView } from "../shared/hooks";

export const ProductTable = () => {
    const { products, loading, error } = useProductView();

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al obtener productos: {error}</p>;

    return (
        <div>
            <h2>Lista de Productos</h2>
            <table border="1">
                <thead>
                    <tr>
                        {["ID", "Nombre", "Descripción", "Stock", "Precio", "Fecha de Entrada"].map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map(({ _id, nameProduct, description, stock, price, entryDate }) => (
                        <tr key={_id}>
                            <td>{_id}</td>
                            <td>{nameProduct}</td>
                            <td>{description}</td>
                            <td>{stock}</td>
                            <td>Q.{price}</td>
                            <td>{new Date(entryDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};