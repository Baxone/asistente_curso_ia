// creame una función que dado un array de elementos json, me mapee estos elementos, obteniendo la latitud y longitud como number y guardadolos en un array multidimensional de tuplas.

/**
 * Mapea un array de elementos JSON obteniendo la latitud y longitud como números y guardándolos en un array multidimensional de tuplas.
 * @param elements - Array de elementos JSON.
 * @returns Array multidimensional de tuplas con latitud y longitud.
 */
export const mapearElementos = (elements: any[]): [number, number][] => {
    return elements.map((element) => [element.lat, element.lng]);
}

// ============== TESTS ==============
import { describe, it, expect } from '@jest/globals';

describe('mapearElementos', () => {
    it('debería retornar un array vacío cuando se pasa un array vacío', () => {
        const resultado = mapearElementos([]);
        expect(resultado).toEqual([]);
    });

    it('debería mapear correctamente un elemento con lat y lng', () => {
        const elementos = [{ lat: 40.4168, lng: -3.7038 }];
        const resultado = mapearElementos(elementos);
        expect(resultado).toEqual([[40.4168, -3.7038]]);
    });

    it('debería mapear correctamente múltiples elementos', () => {
        const elementos = [
            { lat: 40.4168, lng: -3.7038 },
            { lat: 41.3851, lng: 2.1734 },
            { lat: 37.3891, lng: -5.9845 }
        ];
        const resultado = mapearElementos(elementos);
        expect(resultado).toEqual([
            [40.4168, -3.7038],
            [41.3851, 2.1734],
            [37.3891, -5.9845]
        ]);
    });

    it('debería manejar coordenadas con valores cero', () => {
        const elementos = [{ lat: 0, lng: 0 }];
        const resultado = mapearElementos(elementos);
        expect(resultado).toEqual([[0, 0]]);
    });

    it('debería manejar coordenadas negativas', () => {
        const elementos = [{ lat: -33.8688, lng: -151.2093 }];
        const resultado = mapearElementos(elementos);
        expect(resultado).toEqual([[-33.8688, -151.2093]]);
    });

    it('debería ignorar propiedades adicionales del objeto', () => {
        const elementos = [{ lat: 40.4168, lng: -3.7038, nombre: 'Madrid', pais: 'España' }];
        const resultado = mapearElementos(elementos);
        expect(resultado).toEqual([[40.4168, -3.7038]]);
    });
});