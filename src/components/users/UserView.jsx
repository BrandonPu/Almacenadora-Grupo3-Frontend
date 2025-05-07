import React, { useState } from "react";
import { useUserView } from "../../shared/hooks";
import { UserUpdateRole } from "./UserUpdateRole";
import { useDeleteUser } from "../../shared/hooks";


export const UserView = () => {
    const [usernameFilter, setUsernameFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const { user, isLoading } = useUserView();

    const filteredUsers = user.filter((u) => {
        return (
            (!usernameFilter || u.username.toLowerCase().includes(usernameFilter.toLowerCase())) &&
            (!roleFilter || u.role.toLowerCase().includes(roleFilter.toLowerCase()))
        );
    });

    const { handleDeleteUser } = useDeleteUser();

    const handleDelete = async (id) => {
        const confirmed = window.confirm("¿Seguro que deseas eliminar esta categoría?");
        if (!confirmed) return;

        const response = await handleDeleteUser(id);
        if (!response.error) {
            alert("categoria eliminada correctamente");
            window.location.reload();
        }else{
            alert("Error al eliminar la categoria");
        }
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>

            <div style={{ marginBottom: "1rem" }}>
                <input
                    type="text"
                    placeholder="Buscar por nombre de usuario"
                    value={usernameFilter}
                    onChange={(e) => setUsernameFilter(e.target.value)}
                    style={{ marginRight: "1rem" }}
                />
                <input
                    type="text"
                    placeholder="Filtrar por rol"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                />
            </div>

            {isLoading ? (
                <p>Cargando usuarios...</p>
            ) : (
                <table border="1" cellPadding="8" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>UID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Fecha de creación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((u) => (
                            <tr key={u.uid}>
                                <td>{u.uid}</td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>
                                    <div style={{ marginTop: "10px" }}>
                                        <UserUpdateRole userId={u.uid} currentRole={u.role} />
                                    </div>
                                </td>
                                <td>{new Date(u.createdAt).toISOString().split("T")[0]}</td>
                                <td>
                                <button className="btnUserDelete" onClick={() => handleDelete(u.uid)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};