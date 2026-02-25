import { Link } from 'react-router-dom';

/**
 * Página principal / Dashboard del Pomodoro.
 * @returns {JSX.Element} Elemento JSX del componente DashboardPage.
 */
function DashboardPage() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Dashboard</h1>
      <p className="text-muted mb-4">
        Saludo, tarea actual, objetivos diarios y tareas de hoy.
      </p>
      <Link to="/pomodoro" className="btn btn-primary">
        Ir al Pomodoro
      </Link>
    </div>
  );
}

export default DashboardPage;
