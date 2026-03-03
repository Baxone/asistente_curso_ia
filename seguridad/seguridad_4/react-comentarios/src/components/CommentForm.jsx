import { useState, useRef } from 'react'
import DOMPurify from 'dompurify'
import './CommentForm.css'

const ALLOWED_TAGS = ['b', 'i', 'strong', 'em']

/**
 * Formulario para crear un comentario con soporte de formato HTML.
 * Incluye botones para insertar negritas y cursivas.
 * Sanitiza el contenido antes de enviar (defensa en profundidad frente a XSS).
 */
function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const textareaRef = useRef(null)

  const insertFormat = (openTag, closeTag) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const text = content
    const selectedText = text.substring(start, end)

    const newContent =
      text.substring(0, start) +
      openTag + selectedText + closeTag +
      text.substring(end)

    setContent(newContent)
    textarea.focus()
    setTimeout(() => {
      textarea.setSelectionRange(start + openTag.length, end + openTag.length)
    }, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!author.trim() || !content.trim()) return

    const sanitizedContent = DOMPurify.sanitize(content.trim(), { ALLOWED_TAGS })

    onSubmit({
      author: author.trim(),
      content: sanitizedContent,
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    })

    setAuthor('')
    setContent('')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Añadir comentario</h3>

      <div className="form-group">
        <label htmlFor="author">Nombre</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Comentario</label>
        <div className="format-toolbar">
          <button
            type="button"
            onClick={() => insertFormat('<b>', '</b>')}
            title="Negrita"
          >
            <b>B</b>
          </button>
          <button
            type="button"
            onClick={() => insertFormat('<i>', '</i>')}
            title="Cursiva"
          >
            <i>I</i>
          </button>
        </div>
        <textarea
          ref={textareaRef}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe tu comentario... Usa los botones para formato o escribe &lt;b&gt;texto&lt;/b&gt; y &lt;i&gt;texto&lt;/i&gt;"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Publicar comentario
      </button>
    </form>
  )
}

export default CommentForm
