import { Link } from 'react-router-dom';
import TaskCard from '../TaskCard';

/**
 * Lista de tareas de hoy con enlace "Ver todas".
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.tareas - Array de tareas a mostrar.
 * @param {Function} [props.onPlay] - Callback al pulsar play en una tarea.
 * @returns {JSX.Element} Elemento JSX del componente TodayTasksList.
 */
function TodayTasksList({ tareas = [], onPlay }) {
  const tareasMostradas = tareas.slice(0, 3);

  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2 className="h6 text-muted mb-0 text-uppercase">Tareas de hoy</h2>
        <Link to="/tareas" className="small text-primary text-decoration-none fw-medium">
          Ver todas
        </Link>
      </div>
      {tareasMostradas.length === 0 ? (
        <div className="pomodoro-card p-4 text-center">
          <p className="text-muted mb-0 small">No hay tareas para hoy</p>
        </div>
      ) : (
        tareasMostradas.map((t) => (
          <TaskCard
            key={t.id}
            titulo={t.titulo}
            descripcion={t.descripcion}
            prioridad={t.prioridad}
            duracion={t.duracion}
            completada={t.completada}
            onPlay={() => onPlay?.(t)}
          />
        ))
      )}
    </div>
  );
}

export default TodayTasksList;
