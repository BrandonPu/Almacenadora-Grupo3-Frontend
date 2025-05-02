import React from "react";
import { useProductView } from "../../shared/hooks";
import { useDeleteProduct } from "../../shared/hooks";
import { useUpdateProduct } from "../../shared/hooks";

export const ProductTable = () => {
    const { products, loading, error } = useProductView();
    const { deleteProduct } = useDeleteProduct();
    const { updateProduct } = useUpdateProduct();

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al obtener productos: {error}</p>;

    const handleDelete = async (id) => {
        const confirmed = window.confirm("¿Seguro que deseas eliminar este Producto?");
        if (!confirmed) return;

        const response = await deleteProduct(id);
        if (response.error) {
            alert("Error al eliminar Producto");
        } else {
            alert("Producto eliminado correctamente");
            window.location.reload();
        }
    };

    const handleEdit = async (product) => {
        const {
            _id,
            nameProduct: oldName,
            description: oldDescription,
            stock: oldStock,
            price: oldPrice,
            entryDate: oldEntry,
            expirationDate: oldExpiration,
            nameCategory: oldCategory
        } = product;

        const nameProduct = prompt("Nuevo nombre del Producto:", oldName);
        const description = prompt("Nueva descripción del Producto:", oldDescription);
        const stock = prompt("Nuevo stock del Producto:", oldStock);
        const price = prompt("Nuevo precio del Producto:", oldPrice);
        const entryDate = prompt("Nueva fecha de entrada (YYYY-MM-DD):", oldEntry?.slice(0, 10));
        const expirationDate = prompt("Nueva fecha de expiración (YYYY-MM-DD):", oldExpiration?.slice(0, 10));
        const nameCategory = prompt("Nuevo nombre de categoría:", oldCategory || "");

        if (!nameProduct || !description || !stock || !price || !entryDate || !expirationDate || !nameCategory) {
            alert("Todos los campos son requeridos");
            return;
        }

        const data = {
            nameProduct,
            description,
            stock,
            price,
            entryDate,
            expirationDate,
            nameCategory
        };

        const response = await updateProduct(_id, data);

        if (response.error) {
            alert("Error al actualizar producto");
        } else {
            alert("Producto actualizado correctamente");
            window.location.reload();
        }
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <table border="1">
                <thead>
                    <tr>
                        {["ID", "Nombre", "Descripción", "Stock", "Precio", "Fecha de Entrada", "Fecha de Salida", "Eliminar", "Editar"].map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.nameProduct}</td>
                            <td>{product.description}</td>
                            <td>{product.stock}</td>
                            <td>Q.{product.price}</td>
                            <td>{new Date(product.entryDate).toLocaleDateString()}</td>
                            <td>{new Date(product.expirationDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}>Eliminar</button>
                            </td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
