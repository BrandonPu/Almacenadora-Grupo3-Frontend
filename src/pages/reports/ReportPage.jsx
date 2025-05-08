import React, { useState } from "react";
import { Report } from "../../components/reports/Report";
import { Navbar } from "../../components/navbars/Navbar";
import { ProductMovements } from "../../components/reports/ProductMovements";
import { MonthlyActivityStats } from "../../components/reports/MonthlyActivityStats";
import { MostActiveProduct }  from "../../components/reports/MostActiveProduct";
import "./ReportPage.css";

export const ReportPage = () => {
    const [selectedReport, setSelectedReport] = useState("caducidad");

    const renderReport = () => {
        switch (selectedReport) {
            case "caducidad":
                return <Report />;
            case "movimientos":
                return <ProductMovements />;
            case "ventas":
                return <MostActiveProduct />;
            case "actividad":
                return <MonthlyActivityStats />;
            default:
                return <p>Seleccione un reporte válido.</p>;
        }
    };

    const options = [
        {
            key: "caducidad",
            title: "📊 Productos por Caducar",
            description: "Ver productos que vencen próximamente."
        },
        {
            key: "movimientos",
            title: "📈 Movimientos de Productos",
            description: "Resumen de entradas y salidas de productos."
        },
        {
            key: "ventas",
            title: "🔥 Productos Más Activos",
            description: "Top 5 con más entradas y salidas."
        },
        {
            key: "actividad",
            title: "📦 Actividad Mensual",
            description: "Meses con más y menos movimientos."
        }
    ];

    return (
        <>
            <Navbar/>
            <div className="report-page">
                <h1 className="report-page-title">📈 Panel de Reportes</h1>

                <div className="report-options">
                    {options.map((opt) => (
                        <div
                            key={opt.key}
                            role="button"
                            aria-selected={selectedReport === opt.key}
                            className={`report-card ${selectedReport === opt.key ? "active" : ""}`}
                            onClick={() => setSelectedReport(opt.key)}
                        >
                            <h3>{opt.title}</h3>
                            <p>{opt.description}</p>
                        </div>
                    ))}
                </div>

                <div className="report-content">
                    {renderReport()}
                </div>
            </div>
        </>
    );
};