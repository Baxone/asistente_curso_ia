## Un Slash Command es un archivo Markdown con un prompt reutilizable que invocas escribiendo /nombre en el chat de Cursor.

## Como funciona
    - Cuando escribes /nombre, Cursor busca el archivo .cursor/commands/nombre.md en el proyecto.
    - Si existe, se ejecuta el prompt contenido en el archivo.
    - Si no existe, se muestra un mensaje de error.
