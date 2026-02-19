# Caso de uso: Cambio de Versiones

En este caso de uso se ha migrado un componente de Angular de la versión 17 a la versión 21.

# Modo Cursor
**Modo Cursor:** **Agente** (Cmd+Shift+I)

## Prompt
```
dentro de @casos_de_uso/cambio_de_versiones/  existe un componente realizado en v17 y quiero migrarlo a v21 quiero te bases en la documentacion oficial actual que esta en @Angular y tambien revises la siguiente documentacion https://angular.dev/overview 
```


# Componente UserList - Cambio de Versiones

Componente Angular que muestra una lista de usuarios a partir de un array JSON.

## Estructura

- **user.interface.ts** – Interfaz `User` con `id`, `name` y `age`
- **user-list.component.ts** – Componente que recibe el array de usuarios
- **user-list.component.html** – Template con la lista `<ul>` / `<li>`
- **user-list.component.css** – Estilos de la lista

## Uso

```html
<app-user-list [users]="usuarios" />
```

```typescript
// En tu componente padre
usuarios: User[] = [
  { id: 1, name: 'Ana García', age: 28 },
  { id: 2, name: 'Carlos López', age: 35 },
];

// O desde JSON
usuarios = JSON.parse('[{"id":1,"name":"Ana","age":28}]');
```

## Requisitos

- Angular 21+ (Control Flow Syntax `@for`, signal `input()`, componentes standalone)
