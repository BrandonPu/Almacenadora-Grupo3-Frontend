import { useState, useEffect } from 'react';
import { useSupplierView } from '../../shared/hooks/useSuppliersView';
import { useDeleteSupplier } from '../../shared/hooks/useDeleteSupplier';
import { useUpdateSupplier } from '../../shared/hooks/useUpdateSupplier';

export const SupplierTable = () => {
    const [nameFilter, setNameFilter] = useState('');
    const [entryDateFilter, setEntryDateFilter] = useState("");

    const { suppliers, loading, error, setFilters } = useSupplierView();

    const { deleteSupplier } = useDeleteSupplier();
    const { updateSupplier } = useUpdateSupplier();

    useEffect(() => {
        if (!nameFilter && !entryDateFilter) {
            setFilters({})
        }else{
            setFilters({
                nameSupplier: nameFilter,
                entryDate: entryDateFilter ? new Date(entryDateFilter).toISOString() : ""
            })
        }
    }, [nameFilter, entryDateFilter, setFilters]);

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
            phoneNumber: oldNumber
        } = supplier;

        const nameSupplier = prompt("Nuevo nombre del Proveedor:", oldName);
        const emailSupplier = prompt("Nuevo Email del Proveedor:", oldEmail);
        const phoneNumber = prompt("Nuevo Numero del Proveedor:", oldNumber);

        if (!nameSupplier || !emailSupplier || phoneNumber) {
            alert("Todos los campos son requeridos");
            return;
        }

        const data = {
            nameSupplier,
            emailSupplier,
            phoneNumber
        }

        const response = await updateSupplier(_id, data);

        if (response.error) {
            alert("Error al actualizar el Proveedor");
        } else {
            alert("Proveedor actualizado correctamente");
            window.location.reload();
        }
    };

    return (
        <div>
            <h2>Lista de Proveedores</h2>
            <div style={{ marginBottom : "1rem" }}>
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    style={{ marginRight: "1rem" }}
                />
                <input
                    type="date"
                    value={entryDateFilter}
                    onChange={(e) => setEntryDateFilter(e.target.value)}
                />
            </div>

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