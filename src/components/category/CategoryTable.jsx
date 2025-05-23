import React from "react";
import { useCategoryView } from "../../shared/hooks/useCategoriesView";
import { useDeleteCategory } from "../../shared/hooks/useDeleteCategories";
import { useUpdateCategory } from "../../shared/hooks/useUpdateCategories";

export const CategoryTable = () => {
    const { categories, loading, error } = useCategoryView();

    const { deleteCategory } = useDeleteCategory();
    const { updateCategory } = useUpdateCategory();
    
    const handleDelete = async (id) => {
        const confirmed = window.confirm("¿Seguro que deseas eliminar esta categoría?");
        if (!confirmed) return;

        const response = await deleteCategory(id);
        if (!response.error) {
            alert("categoria eliminada correctamente");
            window.location.reload();
        }else{
            alert("Error al eliminar la categoria");
        }
    };

    const handleEdit = async (category) => {
        const {
            _id,
            nameCategory: oldName,
            description: oldDescription,

        } = category;
        
        const nameCategory = prompt("Nuevo nombre del Producto:", oldName);
        const description = prompt("Nueva descripción del Producto:", oldDescription);

        if (!nameCategory || !description) {
            alert("Todos los campos son requeridos");
            return;
        }

        const data = {
            nameCategory,
            description
        };

        const response = await updateCategory(_id, data);

        if (response.error) {
            alert("Error al actualizar la categoria");
        } else {
            alert("Categoria actualizada correctamente");
            window.location.reload();
        }
    };

    return (
        <div>
            <h2>Lista de Categorías</h2>
            {loading ? (
                <p>Cargando categorías...</p>
            ) : error ? (
                <p>Error al obtener las categorias: {error}</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            {["ID", "Nombre", "Descripción", "Editar", "Eliminar"].map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category._id}>
                                <td>{category._id}</td>
                                <td>{category.nameCategory}</td>
                                <td>{category.description}</td>
                                <td>
                                    <button className="btnUpdateCategory" onClick={() => handleEdit(category)}>Editar</button>
                                </td>
                                <td>
                                    <button className="btnDeleteCategory" onClick={() => handleDelete(category._id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};