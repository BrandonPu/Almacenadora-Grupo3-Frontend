import React, { useState } from "react";
import { ProductTable } from "../../components/product/ProductTableView";
import { Navbar } from "../../components/navbars/Navbar";
import { RegisterProduct } from "../../components/product/RegisterProduct";
import { EntryProduct } from "../../components/product/EntryProduct";
import { ExitProduct } from "../../components/product/ExitProduct";
import { MovementHistory } from "../../components/product/MovementHistory";
import { InventarioPage } from "../../components/product/InventarioPage"
import "./ProductPage.css";

export const ProductPage = () => {
    const [viewMode, setViewMode] = useState("table");

    const handleToggleView = (view) => {
        setViewMode(view);
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '15px' }} />
            <div className="product-container">
                <div className="product-header">
                    <h1>Inventario de Productos</h1>
                    <div className="button-group">
                        <button
                            className={`btn ${viewMode === "table" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("table")}
                        >
                            Ver inventario
                        </button>
                        <button
                            className={`btn ${viewMode === "register" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("register")}
                        >
                            Agregar producto
                        </button>
                        <button
                            className={`btn ${viewMode === "entry" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("entry")}
                        >
                            Agregar stock
                        </button>
                        <button
                            className={`btn ${viewMode === "exit" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("exit")}
                        >
                            Salida de producto
                        </button>
                        <button
                            className={`btn ${viewMode === "history" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("history")}
                        >
                            Historial de movimiento
                        </button>
                        <button
                            className={`btn ${viewMode === "inventario" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => handleToggleView("inventario")}
                        >
                            Informes de inventario
                        </button>
                    </div>
                </div>
                
                {viewMode === "table" && (
                    <div className="product-table-container">
                        <ProductTable />
                    </div>
                )}
                
                {viewMode === "inventario" && <InventarioPage/>}
                {viewMode === "register" && <RegisterProduct />}
                {viewMode === "entry" && <EntryProduct />}
                {viewMode === "exit" && <ExitProduct />}
                {viewMode === "history" && (
                    <div className="historyProduct-container">
                        <MovementHistory />
                    </div>
                )}
            </div>
        </>
    );
};
