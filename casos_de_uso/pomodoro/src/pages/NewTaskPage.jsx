import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTaskStore } from '../stores/taskStore';

/**
 * Página para crear una nueva tarea.
 * @returns {JSX.Element} Elemento JSX del componente NewTaskPage.
 */
function NewTaskPage() {
  const navigate = useNavigate();
  const addTask = useTaskStore((s) => s.addTask);

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [prioridad, setPrioridad] = useState('media');

  /**
   * Maneja el envío del formulario.
   * @param {import('react').FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    addTask({ titulo: titulo.trim(), descripcion: descripcion.trim(), prioridad });
    navigate('/tareas');
  };

  return (
    <div className="container py-4">
      <Link to="/tareas" className="btn btn-outline-secondary mb-3">
        ← Volver
      </Link>
      <h1 className="mb-4">Nueva tarea</h1>

      <form onSubmit={handleSubmit} className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título *
            </label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              placeholder="Ej: Revisar documentación"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción
            </label>
            <textarea
              id="descripcion"
              className="form-control"
              rows={3}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Detalles opcionales"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prioridad" className="form-label">
              Prioridad
            </label>
            <select
              id="prioridad"
              className="form-select"
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Crear tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTaskPage;
