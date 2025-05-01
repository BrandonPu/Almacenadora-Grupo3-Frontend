import React from "react";
import { useState } from "react";
import { ProductTable } from "../../components/ProductTableView";
import { Navbar } from "../../components/navbars/Navbar";
import { RegisterProduct } from "../../components/RegisterProduct";
import "./ProductPage.css";

export const ProductPage = () => {
    const [showTable, setShowTable] = useState(false);
 
    const handleToggleView = () => {
        setShowTable((prev) => !prev);
    };

    return (
        <>
            <Navbar/>
            <div style={{ paddingTop: '85px' }}/>
            <div className="product-container">
                <h1>Inventario de Productos</h1>
                
                <button
                    className="btn btn-primary mb-3"
                    onClick={handleToggleView}
                >
                    {showTable ? "Volver al inventario" : "Agregar nuevo producto"}
                </button>

                {showTable ? (
                    <RegisterProduct onSuccess={handleToggleView} />
                ) : (
                    <ProductTable />   )}
            </div>
        </>
    );
};
