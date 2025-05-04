import React, { useState } from "react";
import { ProductTable } from "../../components/product/ProductTableView";
import { Navbar } from "../../components/navbars/Navbar";
import { RegisterProduct } from "../../components/product/RegisterProduct";
import { EntryProduct } from "../../components/product/EntryProduct"; 
import "./ProductPage.css";

export const ProductPage = () => {
    const [viewMode, setViewMode] = useState("table");

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
                    </div>
                </div>

                {viewMode === "table" && (
                    <div className="product-table-container">
                        <ProductTable />
                    </div>
                )}
                {viewMode === "register" && <RegisterProduct />}
                {viewMode === "entry" && <EntryProduct />}
            </div>
        </>
    );
};