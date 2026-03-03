import DOMPurify from 'dompurify'

/**
 * Componente que muestra un comentario con formato HTML seguro (negritas y cursivas).
 * Usa DOMPurify para sanitizar el contenido y prevenir XSS.
 */
const ALLOWED_TAGS = ['b', 'i', 'strong', 'em']

function Comment({ content, author, date, className = '' }) {
  const sanitizedContent = DOMPurify.sanitize(content ?? '', { ALLOWED_TAGS })

  return (
    <article className={`comment ${className}`}>
      <header className="comment-header">
        <span className="comment-author">{author}</span>
        {date && <time className="comment-date">{date}</time>}
      </header>
      <div
        className="comment-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </article>
  )
}

export default Comment
