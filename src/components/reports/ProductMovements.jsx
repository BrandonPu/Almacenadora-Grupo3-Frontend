import React from "react";
import { useProductMovementsSummary } from "../../shared/hooks";
import './report.css';  // Asumo que 'ReportPage.css' incluye el CSS que mencionaste

export const ProductMovements = () => {
    const {
        summary,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        fetchSummary
    } = useProductMovementsSummary("2025-01-01", "2025-12-31");

    return (
        <div className="product-movements">
            <h2 className="product-movements-title">📈 Resumen de Movimientos de Productos</h2>

            <div className="product-movements-filters">
                <div>
                    <label>Desde:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Hasta:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <button
                    className="product-movements-button"
                    onClick={fetchSummary}
                >
                    Consultar
                </button>
            </div>

            {loading && <p className="product-movements-loading">Cargando datos...</p>}
            {error && <p className="product-movements-error">❌ {error}</p>}

            {summary && (
                <div className="product-movements-summary">
                    <div className="product-movements-summary-card">
                        <h3>📥 Total de Entradas</h3>
                        <p>{summary.totalProductEntries}</p>
                    </div>
                    <div className="product-movements-summary-card">
                        <h3>📤 Total de Salidas</h3>
                        <p>{summary.totalProductExits}</p>
                    </div>
                </div>
            )}
        </div>
    );
};