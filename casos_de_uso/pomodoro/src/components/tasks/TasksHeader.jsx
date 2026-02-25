import { Link, useNavigate } from 'react-router-dom';

/**
 * Header de la página de tareas: flecha atrás, título, engranaje.
 * @returns {JSX.Element} Elemento JSX del componente TasksHeader.
 */
function TasksHeader() {
  const navigate = useNavigate();

  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <button
        type="button"
        className="btn btn-link text-dark text-decoration-none p-0"
        onClick={() => navigate(-1)}
        aria-label="Volver"
      >
        <span className="fs-4">←</span>
      </button>
      <h1 className="h5 mb-0 fw-bold">Tareas</h1>
      <Link
        to="/configuracion"
        className="btn btn-link text-dark text-decoration-none p-0"
        aria-label="Configuración"
      >
        <span className="fs-4">⚙</span>
      </Link>
    </header>
  );
}

export default TasksHeader;
