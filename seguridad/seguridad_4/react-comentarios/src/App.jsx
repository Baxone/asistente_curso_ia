import { useState } from 'react'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import './App.css'

const comentariosIniciales = [
  {
    id: 1,
    author: 'María García',
    date: '2 mar 2025',
    content: '¡Excelente artículo! Me parece <b>muy interesante</b> la parte sobre React 19.'
  },
  {
    id: 2,
    author: 'Carlos López',
    date: '1 mar 2025',
    content: 'Totalmente de acuerdo. La <i>nueva API</i> simplifica mucho el código.'
  },
  {
    id: 3,
    author: 'Ana Martínez',
    date: '28 feb 2025',
    content: 'Puedes combinar <b>negritas</b> y <i>cursivas</i> para <b><i>énfasis doble</i></b>. ¡Muy útil!'
  }
]

function App() {
  const [comentarios, setComentarios] = useState(comentariosIniciales)

  const handleNuevoComentario = (comentario) => {
    setComentarios((prev) => [
      { ...comentario, id: Date.now() },
      ...prev
    ])
  }

  return (
    <main>
      <h1>Comentarios con formato HTML</h1>
      <p className="intro">
        Los comentarios soportan etiquetas HTML para <code>&lt;b&gt;</code>, <code>&lt;strong&gt;</code>,{' '}
        <code>&lt;i&gt;</code> y <code>&lt;em&gt;</code>
      </p>
      <CommentForm onSubmit={handleNuevoComentario} />
      <CommentList comments={comentarios} />
    </main>
  )
}

export default App
