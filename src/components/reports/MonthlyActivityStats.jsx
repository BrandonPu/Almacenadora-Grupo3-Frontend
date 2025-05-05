import React from "react";
import { useMonthlyActivityStats } from "../../shared/hooks";
import "./report.css"; // Asegúrate de crear este CSS o usar tu sistema de estilos

const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const MonthlyActivityStats = () => {
    const { stats, loading, error, refetch } = useMonthlyActivityStats();

    const formatMonth = (id) => {
        if (id == null) return "Sin datos";
        return monthNames[id - 1] || `Mes ${id}`;
    };

    if (loading) return <p className="stats-loading">⏳ Cargando estadísticas...</p>;
    if (error) return <p className="stats-error">❌ {error}</p>;

    return (
        <div className="monthly-stats">
            <h2 className="monthly-stats-title">📊 Estadísticas Mensuales de Actividad</h2>

            <div className="monthly-stats-cards">
                <div className="stats-card">
                    <h3>📥 Mes con más entradas</h3>
                    <p>{formatMonth(stats?.mostActiveEntryMonth?._id)}</p>
                    <span>{stats?.mostActiveEntryMonth?.totalEntries} productos</span>
                </div>

                <div className="stats-card">
                    <h3>📥 Mes con menos entradas</h3>
                    <p>{formatMonth(stats?.leastActiveEntryMonth?._id)}</p>
                    <span>{stats?.leastActiveEntryMonth?.totalEntries} productos</span>
                </div>

                <div className="stats-card">
                    <h3>📤 Mes con más salidas</h3>
                    <p>{formatMonth(stats?.mostActiveExitMonth?._id)}</p>
                    <span>{stats?.mostActiveExitMonth?.totalExits} productos</span>
                </div>

                <div className="stats-card">
                    <h3>📤 Mes con menos salidas</h3>
                    <p>{formatMonth(stats?.leastActiveExitMonth?._id)}</p>
                    <span>{stats?.leastActiveExitMonth?.totalExits} productos</span>
                </div>
            </div>
        </div>
    );
};