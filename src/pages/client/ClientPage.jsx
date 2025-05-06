import React, { useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { ClientsPage } from "../../components/clients/ClientsPage";
import { ClientForm } from "../../components/clients/ClientsForm";
import { ClientFrePage } from "../../components/clientsFrecuent/ClientFrePage";
import { ClientFrecuentForm } from "../../components/clientsFrecuent/ClientFreForm";
import "./ClientPage.css"

export const ClientPage = () => {
    const [viewMode, setViewMode] = useState("table");

    const handleToggleView = (view) => {
        setViewMode(view);
    }

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '15px' }} />
            <div className="contentClient-container">
                <div className="contentClient-header">
                    <h1>Información de Clientes</h1>
                    <div className="button-group">
                        <button
                            className={`btn ${viewMode === "table" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("table")}
                        >
                            Ver Clientes
                        </button>
                        
                        <button
                            className={`btn ${viewMode === "agregar" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("agregar")}
                        >
                            Agregar Cliente
                        </button>

                        <button
                            className={`btn ${viewMode === "table2" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("table2")}
                        >
                            Ver Clientes Frecuentes
                        </button>

                        <button
                            className={`btn ${viewMode === "agregar2" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("agregar2")}
                        >
                            Agregar Cliente Frecuente
                        </button>
                    </div>
                </div>
                

                {viewMode === "table" && <ClientsPage />}
                {viewMode === "agregar" && <ClientForm />}
                {viewMode === "table2" && <ClientFrePage />}
                {viewMode === "agregar2" && <ClientFrecuentForm />}
            </div>
        </>
    );
}