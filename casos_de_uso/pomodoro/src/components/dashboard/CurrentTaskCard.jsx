import TaskCard from '../TaskCard';

/**
 * Tarjeta de tarea activa con botón play/pause para iniciar el pomodoro.
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.tarea - Tarea activa o null si no hay.
 * @param {Function} [props.onPlay] - Callback al pulsar play.
 * @returns {JSX.Element} Elemento JSX del componente CurrentTaskCard.
 */
function CurrentTaskCard({ tarea, onPlay }) {
  if (!tarea) {
    return (
      <div className="pomodoro-card p-4 mb-3 text-center">
        <p className="text-muted mb-0 small">No hay tarea activa</p>
        <p className="text-muted mb-0 small">Selecciona una tarea para empezar</p>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <h2 className="h6 text-muted mb-2 text-uppercase">Tarea actual</h2>
      <TaskCard
        titulo={tarea.titulo}
        descripcion={tarea.descripcion}
        prioridad={tarea.prioridad}
        duracion={tarea.duracion}
        onPlay={onPlay}
      />
    </div>
  );
}

export default CurrentTaskCard;
