# React 19 - Comentarios con formato HTML

Proyecto React 19 con un componente para mostrar comentarios que soportan formato HTML (negritas y cursivas).

## Uso

```bash
npm install
npm run dev
```

## Componentes

### `Comment`
Muestra un comentario individual con contenido HTML sanitizado.

```jsx
<Comment
  content="Texto con <b>negritas</b> y <i>cursivas</i>"
  author="Nombre"
  date="2 mar 2025"
/>
```

### `CommentList`
Lista de comentarios.

```jsx
<CommentList comments={[
  {
    id: 1,
    author: 'Usuario',
    date: '2 mar 2025',
    content: 'Mi comentario con <strong>énfasis</strong>'
  }
]} />
```

## Etiquetas permitidas

Por seguridad (XSS), solo se permiten: `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, `<br>`.
