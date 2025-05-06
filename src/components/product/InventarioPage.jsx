import { useProductViewPage } from "../../shared/hooks";

export const InventarioPage = () => {
    const { products, loading, error } = useProductViewPage();

    const totalStock = products.reduce((acc, p) => acc + p.stock, 0);
    const totalValue = products.reduce((acc, p) => acc + (p.stock * p.price), 0);

    return (
        <div className="inventoryReport-container">
            <h2>Informe de Inventario</h2>

            {loading ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p>Error al cargar el inventario</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod, idx) => (
                            <tr key={idx}>
                                <td>{prod.nameProduct}</td>
                                <td>{prod.stock}</td>
                                <td>Q{prod.price.toFixed(2)}</td>
                                <td>Q{(prod.stock * prod.price).toFixed(2)}</td>
                            </tr>
                        ))}
                        <tr>
                            <td><strong>Totales</strong></td>
                            <td><strong>{totalStock}</strong></td>
                            <td></td>
                            <td><strong>Q{totalValue.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
}