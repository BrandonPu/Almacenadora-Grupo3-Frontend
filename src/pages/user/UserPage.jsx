import React, { useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { UserView } from "../../components/users/UserView";
// Puedes agregar esto luego:
// import { RegisterUser } from "../../components/user/RegisterUser";

import "../product/ProductPage.css"; // reutiliza el mismo CSS que productos

export const UserPage = () => {
    const [viewMode, setViewMode] = useState("table");

    const handleToggleView = (view) => {
        setViewMode(view);
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: "15px" }} />
            <div className="product-container">
                <div className="product-header">
                    <h1>Gestión de Usuarios</h1>
                    <div className="button-group">
                        <button
                            className={`btn ${viewMode === "table" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("table")}
                        >
                            Ver usuarios
                        </button>
                        {/* Puedes activar esto después */}
                        {/* <button
                            className={`btn ${viewMode === "register" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("register")}
                        >
                            Registrar usuario
                        </button> */}
                    </div>
                </div>

                {viewMode === "table" && (
                    <div className="product-table-container">
                        <UserView />
                    </div>
                )}

                {/* {viewMode === "register" && <RegisterUser />} */}
            </div>
        </>
    );
};