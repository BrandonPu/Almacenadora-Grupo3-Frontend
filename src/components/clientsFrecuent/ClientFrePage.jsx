import { useClientFrecuentPage } from "../../shared/hooks";

export const ClientFrePage = () => {
    const { clientFre, isLoading} = useClientFrecuentPage();

    return (
        <div>
            <h2>Lista de Clientes Frecuentes</h2>
    
            {isLoading ? (
                <p>Cargando clientes frecuentes...</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            {["ID","Nombre","Apellido","Email","Teléfono","Estado","Creado","Actualizado"].map((header, i) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );   
}