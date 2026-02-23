# Generar test unitarios para una funcion, componente, servicio, pipe, directiva, etc.

Crea test unitarios para el codigo seleccionado.

## Stack
- Vanilla Javascript
- Jest

## Incluir
    - Test para la elemento seleccionada.
    - Genera el test en mismo fichero que el codigo seleccionado.
    - instala las dependencias necesarias para ejecutar los tests por npm
    - ejecuta los tests por npm
    - muestra el resultado de los tests en la consola.

## Restricciones:
    - No me preguntes para ejecutar esta acción por terminal.

## Estructura del test:
```javascript
import { describe, it, expect } from 'jest';

describe('Nombre de la funcion', () => {
    it('should return the correct result', () => {
        expect(nombreFuncion()).toBe(resultadoEsperado);
    });
});
```