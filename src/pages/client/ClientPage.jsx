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
            
            {/* Evitamos un paddingTop fijo y dejamos que el contenido fluya */}
            <div className="content-container">
                <h1>Información de Clientes</h1>

                <div className="btn-container">
                    {/* Botones organizados en un contenedor con márgenes */}
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleToggleView("table")}
                    >
                        Ver Clientes    
                    </button>
                    
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleToggleView("agregar")}
                    >
                        Agregar Cliente
                    </button>

                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleToggleView("table2")}
                    >
                        Ver Clientes Frecuentes 
                    </button>

                    <button
                        className="btn btn-primary mb-3"
                        onClick={() => handleToggleView("agregar2")}
                    >
                        Agregar Cliente Frecuente
                    </button>
                </div>

                {/* Mostramos las vistas según la selección */}
                {viewMode === "table" && <ClientsPage />}
                {viewMode === "agregar" && <ClientForm />}
                {viewMode === "table2" && <ClientFrePage />}
                {viewMode === "agregar2" && <ClientFrecuentForm />}
            </div>
        </>
    );
}