import Comment from './Comment'
import './CommentList.css'

/**
 * Lista de comentarios con formato HTML.
 * Ejemplo de uso: pasar comentarios con HTML para <b>negritas</b> y <i>cursivas</i>
 */
function CommentList({ comments }) {
  return (
    <section className="comment-list">
      <h2>Comentarios</h2>
      <div className="comment-list-items">
        {comments.map((comment, index) => (
          <Comment
            key={comment.id ?? index}
            content={comment.content}
            author={comment.author}
            date={comment.date}
          />
        ))}
      </div>
    </section>
  )
}

export default CommentList
