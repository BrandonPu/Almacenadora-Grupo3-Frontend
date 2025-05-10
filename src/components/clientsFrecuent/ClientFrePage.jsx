import { 
    useClientFrecuentPage, 
    useClientFrecuentDelete,
    useClientFrecuentUpdate
} from "../../shared/hooks";

export const ClientFrePage = () => {
    const { clientFre, isLoading, fetchClientsFrecuents} = useClientFrecuentPage()
    const { deleteClientFre} = useClientFrecuentDelete()
    const {updateClientFre} = useClientFrecuentUpdate()

    const handleDelete = async(id) => {
        const confirmed = window.confirm("¿Seguro que deseas eliminar este Cliente Frecuente?");
        if(!confirmed) return;
        await deleteClientFre(id)
        await fetchClientsFrecuents();
    }

    const handleEdit = async (client) =>{
        const name = prompt("Nuevo nombre del Cliente :" , client.name)
        const surname = prompt("Nuevo Apellido del Cliente :" , client.surname)
        const email = prompt("Nuevo correo del Cliente :" , client.email)
        const phoneNumber = prompt("Nuevo numero de telefono del Cliente :" , client.phoneNumber)

        if(!name || !surname || !email || !phoneNumber){
            alert("Todos los campos son requeridos")
            return
        }

        const data = {
            name,
            surname,
            email,
            phoneNumber
        }

        await updateClientFre(client._id,data)
        await fetchClientsFrecuents()
    }

    return (
        <div className="tableClientFre-container">
            <h2>Lista de Clientes Frecuentes</h2>
    
            {isLoading ? (
                <p>Cargando clientes frecuentes...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            {["ID","Nombre","Apellido","Email","Teléfono","Estado","Creado","Actualizado","Editar", "Eliminar"].map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {clientFre.map((client) => (
                            <tr key={client._id}>
                                <td>{client._id}</td>
                                <td>{client.name}</td>
                                <td>{client.surname}</td>
                                <td>{client.email}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.state ? "Activo" : "Inactivo"}</td>
                                <td>{new Date(client.createdAt).toLocaleString()}</td>
                                <td>{new Date(client.updatedAt).toLocaleString()}</td>
                                <td>
                                    <button className="btnUpdateClient" onClick={() => handleEdit(client)}>Editar</button>
                                </td>
                                <td>
                                    <button className="btnDeleteClient" onClick={() => handleDelete(client._id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}