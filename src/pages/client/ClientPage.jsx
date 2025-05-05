import React, { useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { ClientsPage } from "../../components/clients/ClientsPage";
import { ClientForm } from "../../components/clients/ClientsForm";
import { ClientFrePage } from "../../components/clientsFrecuent/ClientFrePage";
import { ClientFrecuentForm } from "../../components/clientsFrecuent/ClientFreForm";
import "./ClientPage.css"

export const ClientPage = () => {
    const [viewMode, setViewMode] = useState("table")

    const handleToggleView = (view) => {
        setViewMode(view);
    }

    return(
        <>
            <Navbar />
            <div style={{ paddingTop: '85px' }} />
            <div className="product-container"></div>
            <h1>Informacion de Clientes</h1>

            <button
                className="btn btn-primary mb-3"
                onClick={() => handleToggleView("table")}
            >
                ver Clientes    
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
                ver Clientes frecuentes 
            </button>

            <button
                className="btn btn-primary mb-3"
                onClick={() => handleToggleView("agregar2")}
            >
                Agregar Cliente Frecuentes
            </button>



            {viewMode === "table" && <ClientsPage/>}
            {viewMode === "agregar" && <ClientForm/>}
            {viewMode === "table2" && <ClientFrePage/>}
            {viewMode === "agregar2" && <ClientFrecuentForm/>}
        </>
    )
}