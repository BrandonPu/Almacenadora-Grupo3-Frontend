import { 
    useClientDelete, 
    useClientPage,
    useClientUpdate 
} from "../../shared/hooks";

export const ClientsPage = () => {
    const { clients, isLoading , fetchClients} = useClientPage()
    const { deleteClients } = useClientDelete()
    const {updateClients} = useClientUpdate()


    const handleDelete = async (id) =>{
        const confirmed = window.confirm("¿Seguro que deseas eliminar este Cliente?")
        if (!confirmed) return
        await deleteClients(id)
        await fetchClients()
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

        await updateClients(client._id, data)
        await fetchClients()

    }

    return (
        <div className="clientTable-container">
            <h2>Lista de Clientes</h2>

            {isLoading ? (
                <p>Cargando clientes...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            {["ID", "Nombre", "Apellido","Email", "Teléfono", "Estado", "Creado", "Actualizado", "Editar", "Eliminar"].map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
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
                                    <button onClick={() => handleEdit(client)}>Editar</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(client._id)}>Eliminar</button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
    
}