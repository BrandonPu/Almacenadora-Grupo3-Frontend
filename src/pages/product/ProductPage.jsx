import React from "react";
import { ProductTable } from "../../components/ProductTableView";
import "./ProductPage.css";

export const ProductPage = () => {
    return (
        <div className="product-container">
            <h1>Inventario de Productos</h1>
            <ProductTable />
        </div>
    );
};
