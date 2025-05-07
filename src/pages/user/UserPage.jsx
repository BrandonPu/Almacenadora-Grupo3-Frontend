import React, { useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { UserView } from "../../components/users/UserView";
import "./userPage.css"; // reutiliza el mismo CSS que productos

export const UserPage = () => {
    const [viewMode, setViewMode] = useState("table");

    const handleToggleView = (view) => {
        setViewMode(view);
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: "15px" }} />
            <div className="user-container">
                <div className="user-header">
                    <h1>Gestión de Usuarios</h1>
                    <div className="button-group">
                        <button
                            className={`btn ${viewMode === "table" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("table")}
                        >
                            Ver usuarios
                        </button>
                    </div>
                </div>

                {viewMode === "table" && (
                    <div className="user-table-container">
                        <UserView />
                    </div>
                )}
            </div>
        </>
    );
};