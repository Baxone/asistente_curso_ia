export function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Aplica un descuento porcentual al total.
 * @param {number} total - Importe total sobre el que aplicar el descuento.
 * @param {number} discount - Porcentaje de descuento (0-100).
 * @returns {number} El total con el descuento aplicado.
 * @throws {Error} Si el descuento es menor que 0 o mayor que 100.
 */
export function applyDiscount(total, discount) {
    if (discount < 0 || discount > 100) throw new Error('Descuento inválido');
    return total * (1 - discount / 100);
}

/**
 * Agrupa los ítems por categoría.
 * @param {Array<{price: number, quantity: number, category: string}>} items - Array de ítems a agrupar.
 * @returns {Object.<string, Array>} Objeto cuya clave es la categoría y el valor es el array de ítems de esa categoría.
 */
export function groupByCategory(items) {
    return items.reduce((groups, item) => {
        const key = item.category;
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
        return groups;
    }, {});
}