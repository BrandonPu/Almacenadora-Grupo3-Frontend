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
            <Navbar />
            <div className="product-container">
                <div className="product-content">
                    <h1>Inventario de Productos</h1>

                    {showTable ? (
                        <>
                            <div className="registerproducts-container">
                                <RegisterProduct onSuccess={handleToggleView} />
                            </div>
                            <div className="button-wrapper">
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleToggleView}
                                >
                                    Volver al inventario
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <ProductTable />
                            <div className="button-wrapper">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleToggleView}
                                >
                                    Agregar nuevo producto
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};