import React from 'react';
import { useSupplierView } from '../../shared/hooks/useSuppliersView';
import { useDeleteSupplier } from '../../shared/hooks/useDeleteSupplier';
import { useUpdateSupplier } from '../../shared/hooks/useUpdateSupplier';

export const SupplierTable = () => {
    const { suppliers, loading, error } = useSupplierView();

    const { deleteSupplier } = useDeleteSupplier();
    const { updateSupplier } = useUpdateSupplier();

    const handleDelete = async (id) => {
        const confirmed = window.confirm("¿Seguro que desea eliminar este proveedor?");
        if (!confirmed) return;

        const response = await deleteSupplier(id);
        if (response.error) {
            alert("Error al elimnar el proveedor");
        } else {
            alert("Proveedor eliminado correctamente");
            window.location.reload();
        }
    };

    const handleEdit = async (supplier) => {
        const {
            _id,
            nameSupplier: oldName,
            emailSupplier: oldEmail,
            phoneNumber: oldNumber,
            nameProduct: oldProduct
        } = supplier;
    
        const nameSupplier = prompt("Nuevo nombre del Proveedor:", oldName)?.trim();
        const emailSupplier = prompt("Nuevo Email del Proveedor:", oldEmail)?.trim();
        const phoneNumber = prompt("Nuevo Número del Proveedor:", oldNumber)?.trim();
        const nameProduct = prompt("Nuevo Nombre del Producto que abastece:", oldProduct || "")?.trim();
    
        // Validación: todos los campos deben estar presentes
        if (!nameSupplier || !emailSupplier || !phoneNumber || !nameProduct) {
            alert("Todos los campos son requeridos");
            return;
        }
    
        const data = {
            nameSupplier,
            emailSupplier,
            phoneNumber,
            nameProduct
        };
    
        try {
            const response = await updateSupplier(_id, data);
    
            if (response.error) {
                alert(`Error al actualizar el Proveedor: ${response.message || "Error desconocido"}`);
            } else {
                alert("Proveedor actualizado correctamente");
                window.location.reload();
            }
        } catch (err) {
            console.error("Error en handleEdit:", err);
            alert("Ocurrió un error inesperado al actualizar el proveedor.");
        }
    };

    return (
        <div>
            <h2>Lista de Proveedores</h2>


            {loading && <p>Cargando proveedores...</p>}
            {error && <p className="error">Error: {error}</p>}

            <table border="1">
                <thead>
                    <tr>
                        {["ID", "Nombre", "Email", "Telefono", "productos", "Editar", "Eliminar"].map((header, i) => (
                            <th key={i}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier) => (
                        <tr key={supplier._id}>
                            <td>{supplier._id}</td>
                            <td>{supplier.nameSupplier}</td>
                            <td>{supplier.emailSupplier}</td>
                            <td>{supplier.phoneNumber}</td>
                            <td>
                                {supplier.keeperProduct?.map(p => p.nameProduct).join(', ') || 'Ninguno'}
                            </td>
                            <td className="actions">
                                <button 
                                    onClick={() => handleEdit(supplier)}
                                >
                                    Editar
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleDelete(supplier._id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};