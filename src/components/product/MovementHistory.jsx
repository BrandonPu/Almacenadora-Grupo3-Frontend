import React, { useEffect, useState } from "react";
import { useMovementHistory } from "../../shared/hooks";
import toast from "react-hot-toast";

export const MovementHistory = () => {
    const { fetchMovementHistory } = useMovementHistory();
    const [entryHistory, setEntryHistory] = useState([]);
    const [exitHistory, setExitHistory] = useState([]);

    useEffect(() => {
        let isMounted = true; 
        const loadHistory = async () => {
            const response = await fetchMovementHistory();
            if (isMounted) {
                if (response.error) {
                    toast.error("Error al cargar el historial de movimientos");
                } else {
                    setEntryHistory(response.productHistoryEntry || []);
                    setExitHistory(response.productHistoryExit || []);
                }
            }
        };
    
        loadHistory();
    
        return () => {
            isMounted = false; 
        };
    }, []);

    return (
        <div>
            <h2>Historial de Movimiento</h2>
            <h3>Entradas</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto </th>
                        <th>Cantidad </th>
                        <th>Fecha </th>
                        <th>Usuario </th>
                    </tr>
                </thead>
                <tbody>
                    {entryHistory.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.modify[0]?.productId?.nameProduct || "N/A"}</td>
                            <td>{entry.modify[0]?.quantity}</td>
                            <td>{new Date(entry.modify[0]?.date).toLocaleString()}</td>
                            <td>{entry.keeperUser?.name || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Salidas</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Razón</th>
                        <th>Destino</th>
                        <th>Tipo de Cliente</th>
                        <th>Email del Cliente</th>
                        <th>Fecha</th>
                        <th>Encargado</th>
                    </tr>
                </thead>
                <tbody>
                    {exitHistory.map((exit, index) => (
                        <tr key={index}>
                            <td>{exit.productId?.nameProduct || "N/A"}</td>
                            <td>{exit.quantity}</td>
                            <td>{exit.reason || "N/A"}</td>
                            <td>{exit.destination || "N/A"}</td>
                            <td>{exit.keeperClient ? "Cliente" : exit.keeperFrecuentClient ? "Cliente Frecuente" : "N/A"}</td>
                            <td>{exit.keeperClient?.email || exit.keeperFrecuentClient?.email || "N/A"}</td>
                            <td>{new Date(exit.date).toLocaleString()}</td>
                            <td>{exit.keeperUser?.name || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};