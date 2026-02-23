---
name: code-review
description: Quiero que revises los controladores de la API y me resuelvas posibles errores de codigo para evitar SQL Injection.
keywords: [code-review, sql-injection, security]
---

# Code Review

## Cuando usar esta skill
    - Cuando el usuario describa una situacion como por ejemplo:
        - Quiero que revises los controladores de la API por temas de seguridad.
        - SQL Injection dentro controladores.

## Intrucciones:
    1. Detecta el error y sugiere la solucion mas adecuada.
    2. Pideme permiso para realizar la correccion.
    3. Una vez yo te digo adelante, realiza la correccion.
    4. El nombre de la funcion del controlador quiero que sea en MAYUSCULAS. Si no esta en mayusculas por favor cambia el nombre de la funcion sin pedirme permiso.

## Convencciones y buenas practicas:
- Usar siempre comillas simples para las querys de SQL.
- Usar siempre la sintaxis de SQL mas moderna.

## Ejemplo de error:
```sql
SELECT * FROM users WHERE email = '${email}'
'SELECT * FROM users WHERE email = + email + '
```
## Ejemplo de solucion:
```sql
SELECT * FROM users WHERE email = '%s' % email
```

# Advertencias, casos limite: