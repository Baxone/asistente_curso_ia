import PriorityBadge from '../PriorityBadge';

/**
 * Tarjeta de tarea en progreso con indicador de sesión (ej. "2/4 25 mins").
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.tarea - Tarea asociada al pomodoro.
 * @param {number} props.sesionActual - Sesión actual (1-4).
 * @param {number} props.sesionesPorCiclo - Total de sesiones por ciclo.
 * @param {number} props.duracionMins - Duración en minutos del pomodoro.
 * @returns {JSX.Element} Elemento JSX del componente TaskInProgressCard.
 */
function TaskInProgressCard({
  tarea,
  sesionActual = 1,
  sesionesPorCiclo = 4,
  duracionMins = 25,
}) {
  if (!tarea) {
    return (
      <div className="pomodoro-card p-3 mb-4 text-center">
        <p className="text-muted mb-0 small">Sin tarea asociada</p>
      </div>
    );
  }

  return (
    <div className="pomodoro-card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-start gap-2">
        <div className="min-w-0 flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
            <span className="fw-semibold">{tarea.titulo}</span>
            <PriorityBadge prioridad={tarea.prioridad} />
          </div>
          <span className="small text-muted">
            {sesionActual}/{sesionesPorCiclo} · {duracionMins} mins
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskInProgressCard;
