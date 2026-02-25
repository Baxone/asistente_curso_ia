import PriorityBadge from './PriorityBadge';

/**
 * Tarjeta de tarea con icono por prioridad, título, duración y botón play.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Título de la tarea.
 * @param {string} [props.descripcion] - Descripción opcional.
 * @param {'alta'|'media'|'baja'} [props.prioridad='media'] - Prioridad de la tarea.
 * @param {string} [props.duracion] - Texto de duración (ej. "25 mins").
 * @param {boolean} [props.completada] - Si la tarea está completada.
 * @param {Function} [props.onPlay] - Callback al pulsar play.
 * @param {Function} [props.onClick] - Callback al hacer clic en la tarjeta.
 * @returns {JSX.Element} Elemento JSX del componente TaskCard.
 */
function TaskCard({
  titulo,
  descripcion,
  prioridad = 'media',
  duracion,
  completada = false,
  onPlay,
  onClick,
}) {
  const iconMap = {
    alta: '🔴',
    media: '🟡',
    baja: '🟢',
  };
  const icon = iconMap[prioridad] || iconMap.media;

  return (
    <div
      className={`pomodoro-card p-3 mb-2 d-flex align-items-center justify-content-between gap-2 ${
        completada ? 'opacity-75' : ''
      }`}
      role={onClick ? 'button' : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick}
      onKeyDown={(e) => onClick && (e.key === 'Enter' || e.key === ' ') && e.preventDefault()}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
        <span className="fs-5" style={{ flexShrink: 0 }} aria-hidden>
          {icon}
        </span>
        <div className="min-w-0 flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className={`fw-semibold ${completada ? 'text-decoration-line-through text-muted' : ''}`}>
              {titulo}
            </span>
            <PriorityBadge prioridad={prioridad} />
          </div>
          {descripcion && (
            <p className="mb-0 small text-muted text-truncate">{descripcion}</p>
          )}
          {duracion && (
            <span className="small text-muted">{duracion}</span>
          )}
        </div>
      </div>
      {onPlay && !completada && (
        <button
          type="button"
          className="btn btn-pomodoro-play flex-shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onPlay();
          }}
          aria-label="Iniciar pomodoro"
        >
          ▶
        </button>
      )}
    </div>
  );
}

export default TaskCard;
