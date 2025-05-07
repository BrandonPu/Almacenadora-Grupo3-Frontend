import React from "react";
import { useDeleteUser } from "../../shared/hooks";

export const UserDelete = ({ userId }) => {
    const { handleDeleteUser, loading, error, success } = useDeleteUser();

    const handleDelete = () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
            handleDeleteUser(userId);
        }
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
                onClick={handleDelete}
                className="btn btn-danger"
                disabled={loading}
            >
                {loading ? "Eliminando..." : "Eliminar Usuario"}
            </button>

            {success && <span style={{ color: "green" }}>✓ Usuario eliminado</span>}
            {error && <span style={{ color: "red" }}>{error}</span>}
        </div>
    );
};

