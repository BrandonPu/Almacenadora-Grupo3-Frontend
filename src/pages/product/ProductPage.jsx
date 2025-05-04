import React, { useState } from "react";
import { ProductTable } from "../../components/product/ProductTableView";
import { Navbar } from "../../components/navbars/Navbar";
import { RegisterProduct } from "../../components/product/RegisterProduct";
import { EntryProduct } from "../../components/product/EntryProduct";
import { ExitProduct } from "../../components/product/ExitProduct";
import { MovementHistory } from "../../components/product/MovementHistory";
import "./ProductPage.css";

export const ProductPage = () => {
    const [viewMode, setViewMode] = useState("table");

    const handleToggleView = (view) => {
        setViewMode(view);
    };

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '85px' }} />
            <div className="product-container">
                <h1>Inventario de Productos</h1>

                <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleToggleView("table")}
                >
                    Ver inventario
                </button>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleToggleView("register")}
                >
                    Agregar nuevo producto
                </button>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleToggleView("entry")}
                >
                    Agregar stock a producto
                </button>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleToggleView("exit")}
                >
                    Salida de producto
                </button>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleToggleView("history")}
                >
                    Historial de movimiento
                </button>

                {viewMode === "table" && <ProductTable />}
                {viewMode === "register" && <RegisterProduct />}
                {viewMode === "entry" && <EntryProduct />}
                {viewMode === "exit" && <ExitProduct />}
                {viewMode === "history" && <MovementHistory />}
            </div>
        </>
    );
};
