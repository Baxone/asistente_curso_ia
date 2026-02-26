#!/bin/bash

# Log relativo al proyecto
LOG_DIR=".cursor/logs"
LOG="$LOG_DIR/afterFileEdit.log"
mkdir -p "$LOG_DIR"

echo "$(date '+%Y-%m-%d %H:%M:%S') - Hook iniciado (entrada)" >> "$LOG"

# Leer payload del hook JSON
PAYLOAD=$(cat)
FILE_PATH=$(echo "$PAYLOAD" | jq -r '.file_path // .filePath // empty')

# Calcular FECHA y NOMBRE_FICHERO DESPUÉS de tener FILE_PATH
FECHA=$(date '+%Y-%m-%d')
NOMBRE_FICHERO=$(basename "$FILE_PATH")

if ! command -v npx &> /dev/null; then
    echo "npx no esta instalado." >> "$LOG"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - Hook finalizado (salida)" >> "$LOG"
    exit 0
fi

echo "$(date '+%Y-%m-%d %H:%M:%S') - Hook ejecutado para $FILE_PATH" >> "$LOG"

# Formatear archivos js/ts/tsx/jsx/css/json
if [[ "$FILE_PATH" =~ \.(js|ts|tsx|jsx|css|json)$ ]]; then
    echo "Formateando $FILE_PATH con prettier" >> "$LOG"
    npx prettier --write "$FILE_PATH"

    # Añadir comentario al inicio del archivo (solo si quieres documentar el formateo)
    # Descomenta el bloque siguiente si deseas añadir el comentario:
    COMMENT="// Formateado con prettier el dia $FECHA - $NOMBRE_FICHERO"
    if [ -n "$FILE_PATH" ] && [ -f "$FILE_PATH" ]; then
         echo -e "$COMMENT\n$(cat "$FILE_PATH")" > "$FILE_PATH"
    fi
fi

echo "$(date '+%Y-%m-%d %H:%M:%S') - Hook finalizado (salida)" >> "$LOG"
