import React, { useState } from "react";
import { useUpdateRoleUser } from "../../shared/hooks";

export const UserUpdateRole = ({ userId, currentRole }) => {
    const [selectedRole, setSelectedRole] = useState(currentRole);
    const { updateRole, loading, error } = useUpdateRoleUser();

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleUpdateRole = async () => {
        if (selectedRole === currentRole) return;
        await updateRole(userId, selectedRole);
        window.location.reload();
    };

    return (
        <div>
            <select value={selectedRole} onChange={handleRoleChange} disabled={loading}>
                <option value="NORMAL_ROLE">Usuario Normal</option>
                <option value="ADMIN_ROLE">Administrador</option>
            </select>

            <button
                onClick={handleUpdateRole}
                disabled={loading || selectedRole === currentRole}
            >
                {loading ? "Actualizando..." : "Actualizar Rol"}
            </button>

            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
};