import { useProviderPage } from "../../shared/hooks";
import { useDeleteSupplier } from "../../shared/hooks";
import { useUpdateSupplier } from "../../shared/hooks/useUpdateSupplier";
import { useNavigate } from "react-router-dom";


export const ProviderPage = () => {
    const { providers, isLoading } = useProviderPage();
    const { deleteSupplier } = useDeleteSupplier();
    const { updateSupplier } = useUpdateSupplier();

    const navigate = useNavigate();

    const handleAdd = () => {
      navigate("/auth"); // rutas de formulario
    }
  
    const handleDelete = async (id) => {
      const confirmed = window.confirm("¿Seguro que deseas eliminar este proveedor?");
      if (!confirmed) return;
  
      const response = await deleteSupplier(id);
      if (response.error) {
        alert("Error al eliminar proveedor");
      } else {
        alert("Proveedor eliminado correctamente");
        window.location.reload();
      }
    };
  
    const handleEdit = async (prov) => {
      const nameSupplier = prompt("Nuevo nombre del proveedor:", prov.nameSupplier);
      const emailSupplier = prompt("Nuevo correo electrónico:", prov.emailSupplier);
      const phoneNumber = prompt("Nuevo teléfono:", prov.phoneNumber);
      const nameProduct = prompt("Nuevo nombre del producto:", prov.keeperProduct[0]?.nameProduct || "");
  
      if (!nameSupplier || !emailSupplier || !phoneNumber || !nameProduct) {
        alert("Todos los campos son requeridos");
        return;
      }
  
      const data = {
        nameSupplier,
        emailSupplier,
        phoneNumber,
        nameProduct
      }
  
      const response = await updateSupplier(prov._id, data);
  
      if (response.error) {
        alert("Error al actualizar proveedor");
      } else {
        alert("Proveedor actualizado correctamente");
        window.location.reload();
      }
    }
  
    return (
      <div>
        <h2>Lista de Proveedores</h2>
        {isLoading ? (
          <p>Cargando proveedores...</p>
        ) : (
          <ul>
            {providers.map((prov) => (
              <li key={prov._id} style={{ marginBottom: '1rem' }}>
                <strong>ID:</strong> {prov._id} <br />
                <strong>Nombre:</strong> {prov.nameSupplier} <br />
                <strong>Email:</strong> {prov.emailSupplier} <br />
                <strong>Telefono:</strong> {prov.phoneNumber} <br />
                <strong>Productos guardados:</strong>
                <ul>
                  {prov.keeperProduct.length > 0 ? (
                    prov.keeperProduct.map((prod, index) => (
                      <li key={index}>{prod.nameProduct}</li>
                    ))
                  ) : (
                    <li>No hay productos guardados</li>
                  )}
                </ul>
                <strong>Estado:</strong> {prov.state ? 'Activo' : 'Inactivo'} <br/>
                <strong>Creado:</strong> {new Date(prov.createdAt).toLocaleString()} <br/>
                <strong>Actualizado:</strong> {new Date(prov.updatedAt).toLocaleString()} <br/>
                <button onClick={() => handleDelete(prov._id)}>Eliminar</button>
                <button onClick={() => handleEdit(prov)} style={{ marginLeft: '1rem' }}>Editar</button> <br/>
                <button onClick={handleAdd}>Agregar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
}