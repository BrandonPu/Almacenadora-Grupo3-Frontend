export const validateExitProduct = (quantity, selectedProductId, products) => {
    // Buscar el producto seleccionado en la lista de productos
    const product = products.find((p) => p._id === selectedProductId);

    if (!product) {
        return { valid: false, message: "Producto no encontrado." };
    }

    if (quantity > product.stock) {
        return { valid: false, message: `La cantidad ingresada (${quantity}) excede el stock disponible (${product.stock}).` };
    }

    return { valid: true };
};