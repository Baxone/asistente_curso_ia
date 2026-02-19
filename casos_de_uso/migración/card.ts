export interface CardItem {
    price: number;
    quantity: number;
    category: string;
}

export function calculateTotal(items: CardItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Aplica un descuento porcentual al total.
 * @param total - Importe total sobre el que aplicar el descuento.
 * @param discount - Porcentaje de descuento (0-100).
 * @returns El total con el descuento aplicado.
 * @throws {Error} Si el descuento es menor que 0 o mayor que 100.
 */
export function applyDiscount(total: number, discount: number): number {
    if (discount < 0 || discount > 100) throw new Error('Descuento inválido');
    return total * (1 - discount / 100);
}

/**
 * Agrupa los ítems por categoría.
 * @param items - Array de ítems a agrupar.
 * @returns Objeto cuya clave es la categoría y el valor es el array de ítems de esa categoría.
 */
export function groupByCategory(items: CardItem[]): Record<string, CardItem[]> {
    return items.reduce<Record<string, CardItem[]>>((groups, item) => {
        (groups[item.category] ??= []).push(item);
        return groups;
    }, {});
}
