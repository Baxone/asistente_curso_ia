---
name: install-npm-dependency
description: Pregunta al usuario qué dependencia de NPM instalar y en qué carpeta, y ejecuta la instalación. Usar cuando el usuario quiera instalar paquetes npm en una carpeta específica, añadir dependencias a un proyecto, o instalar librerías en un directorio concreto.
keywords: [npm, install, dependencia, paquete, carpeta]
---

# Instalar dependencia NPM en carpeta

## Cuándo usar esta skill

- El usuario quiere instalar un paquete de NPM
- El usuario indica una carpeta específica donde instalar
- El usuario pide añadir dependencias a un proyecto o directorio

## Flujo de trabajo

### 1. Recoger la información

Si el usuario **no ha indicado** alguno de estos datos, preguntar en el chat:

- **Dependencia**: "¿Qué dependencia de NPM quieres instalar?" (ej: `express`, `lodash`, `@types/node`)
- **Carpeta destino**: "¿En qué carpeta quieres instalarla?" (ruta relativa al proyecto o absoluta)

### 2. Ejecutar la instalación

Cuando tengas ambos datos, ejecutar:

```bash
npm install <nombre-paquete> --prefix <ruta-carpeta>
```

**Ejemplos:**

```bash
# Instalar express en ./api
npm install express --prefix ./api

# Instalar lodash en carpeta absoluta
npm install lodash --prefix /ruta/completa/mi-proyecto

# Instalar dependencia de desarrollo
npm install --save-dev typescript --prefix ./frontend
```

### 3. Variantes de instalación

| Tipo | Comando |
|------|---------|
| Dependencia normal | `npm install <pkg> --prefix <carpeta>` |
| Solo desarrollo | `npm install <pkg> --save-dev --prefix <carpeta>` |
| Versión específica | `npm install <pkg>@1.2.3 --prefix <carpeta>` |

### 4. Si la carpeta no tiene package.json

`npm install --prefix` crea automáticamente un `package.json` básico si no existe. No hace falta `npm init` previo.

## Notas

- Usar rutas relativas cuando sea posible (ej: `./casos_de_uso/api_node`)
- Si la carpeta tiene espacios, usar comillas: `--prefix "./mi carpeta"`
- Si tuviera que crear alguna carpeta, usaria snakecase para el nombre de la carpeta. (ej: mi-carpeta)
- Confirmar al usuario cuando la instalación termine correctamente
