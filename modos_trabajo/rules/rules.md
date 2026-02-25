# Que es una rule?

Una Rule es un archivo con instrucciones que siempre se aplican automáticamente en cada interacción con el agente. Son las "reglas del juego" que Cursor sigue sin que tú las invoques.

- podriamos generar una rule para tipar todas las variables en typescript de una proyecto.

`````
.cursor/rules/mi-regla.mdc  →  se aplica SIEMPRE automáticamente

`````

FrontMatter: para formatear el contenido del archivo.

Rules se aplican siempre.

Opciones de FrontMatter:
    - alwaysApply: true
    - alwaysApply: false
    - description: "Descripción de la rule"
    - globs: "los archivos donde se aplica la rule"
            ejemplo: "**/*.ts", "src/components/*"

