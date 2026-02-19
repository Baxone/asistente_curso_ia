/**
 * Suma todos los números de un array.
 * @param {number[]} numeros - Array de números a sumar.
 * @returns {number} La suma de todos los números.
 */
const sumar = (numeros) => {
    return numeros.reduce((acc, num) => acc + num, 0);
};

/**
 * Calcula la media aritmética de los números pasados como argumentos.
 * @param {...number} numeros - Números para calcular la media (argumentos variables).
 * @returns {number} La media de los números.
 */
const media = (...numeros) => {
    return sumar(numeros) / numeros.length;
};

