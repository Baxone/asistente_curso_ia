# Genera un mensaje de commit en el repositorio.

Analice @GIT diff y genere un mensaje de commit en el repositorio.

## Formato
<type>(<scope>): <description>

# Types:
    - feat: Nueva funcionalidad
    - fix: Corrección de errores
    - refactor: Refactorización de código

## Rules:
    - Maximo 60 caracteres en primera linea.
    - Usar imperativo: add, remove, change en lugar de added, removed, changed.
    - No usar signos de puntuación en la primera linea.
    - Usar siempre comillas simples para los mensajes.
    - los mensajes deben ser en español.

## Restricciones:
    - No me preguntes para ejecutar esta acción por terminal.