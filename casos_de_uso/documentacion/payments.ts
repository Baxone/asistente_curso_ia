type PaymentMethod = 'card' | 'paypal' | 'transfer';

function executeTransaction(params: { amount: number; currency: string; method: PaymentMethod }) {
    return { success: true, transactionId: 'mock-id' };
}

/**
 * Procesa un pago aplicando la comisión correspondiente al método de pago y ejecutando la transacción.
 * @param amount - Importe a pagar (debe ser positivo)
 * @param currency - Código de la moneda (ej: 'EUR', 'USD')
 * @param method - Método de pago ('card', 'paypal' o 'transfer')
 * @returns Resultado de la transacción ejecutada
 * @throws {Error} Si amount es menor o igual a 0
 */
export function processPayment(amount: number, currency: string, method: PaymentMethod) {
    if (amount <= 0) throw new Error('Amount must be positive');
    const fee = calculateFee(amount, method);
    return executeTransaction({ amount: amount + fee, currency, method });
}

/**
 * Calcula la comisión aplicable según el método de pago.
 * @param amount - Importe base sobre el que calcular la comisión
 * @param method - Método de pago ('card': 2.9%, 'paypal': 3.4%, 'transfer': 0%)
 * @returns La comisión calculada en la misma unidad que amount
 * @example
 * calculateFee(100, 'card');   // 2.9
 * calculateFee(50, 'paypal'); // 1.7
 * calculateFee(200, 'transfer'); // 0
 */
function calculateFee(amount: number, method: PaymentMethod): number {
    const rates: Record<PaymentMethod, number> = { card: 0.029, paypal: 0.034, transfer: 0 };
    return amount * rates[method];
}