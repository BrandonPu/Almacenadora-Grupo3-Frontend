import React, { useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { CategoryTable } from "../../components/category/CategoryTable";
import { AddCategory } from "../../components/category/RegisterCategory";
import "./category.css"

export const CategoryPage = () => {
    const [viewMode, setViewMode] = useState("table");

    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '15px' }} />
            <div className="category-container">
            <div className="category-header">
                    <h1>Administracion de categorias</h1>
                    <div className="button-group">
                        <button
                            className={`btn ${viewMode === "table" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("table")}
                        >
                            Ver categorias
                        </button>
                        <button
                            className={`btn ${viewMode === "register" ? "btn-primary" : "btn-secondary"}`}
                            onClick={() => setViewMode("register")}
                        >
                            Agregar categoria
                        </button>
                    </div>
                </div>
                {viewMode === "table" && (
                    <div className="category-table-container">
                    <CategoryTable />
                    </div>
                )}
                {viewMode === "register" && <AddCategory />}
            </div>
        </>
    );
};