import React, { useState } from "react";
import { useExpirationProduct } from "../../shared/hooks";
import "./report.css"; // Asegúrate de que no tenga doble slash

export const Report = () => {
    const { products, loading, error, month, setMonth } = useExpirationProduct(1);
    const [inputMonth, setInputMonth] = useState(month);
    const [inputError, setInputError] = useState(null);

    const handleMonthChange = () => {
        const parsedMonth = Number(inputMonth);
        if (!parsedMonth || parsedMonth < 1) {
            setInputError("Ingresa un número válido mayor a 0.");
            return;
        }
        setInputError(null);
        setMonth(parsedMonth);
    };

    return (
        <div className="report-container">
            <h2 className="report-title">Reporte de Productos por Caducar</h2>

            <div className="report-filters">
                <label htmlFor="monthInput">Meses hasta vencimiento:</label>
                <input
                    id="monthInput"
                    type="number"
                    min="1"
                    step="1"
                    value={inputMonth}
                    onChange={(e) => setInputMonth(e.target.value)}
                    className="report-input"
                />
                <button onClick={handleMonthChange} className="report-button">
                    Buscar
                </button>
                {inputError && <p className="report-error">{inputError}</p>}
            </div>

            {loading ? (
                <p>Cargando productos por caducar...</p>
            ) : error ? (
                <p className="report-error">Error: {error}</p>
            ) : products.length === 0 ? (
                <p>No hay productos por caducar en los próximos {month} meses.</p>
            ) : (
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Fecha de Entrada</th>
                            <th>Fecha de Expiración</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product.nameProduct}</td>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>Q. {product.price}</td>
                                <td>{new Date(product.entryDate).toLocaleDateString()}</td>
                                <td>{new Date(product.expirationDate).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};