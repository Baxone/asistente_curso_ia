/**
 * Tarjeta de progreso circular con objetivos diarios (ej. 10/15 completados).
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.completados - Número de pomodoros/tareas completados.
 * @param {number} props.objetivo - Objetivo diario total.
 * @param {string} [props.label='Pomodoros'] - Etiqueta del progreso.
 * @returns {JSX.Element} Elemento JSX del componente DailyGoalsCard.
 */
function DailyGoalsCard({ completados, objetivo, label = 'Pomodoros' }) {
  const size = 120;
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = objetivo > 0 ? completados / objetivo : 0;
  const strokeDasharray = circumference * Math.min(progress, 1);

  return (
    <div className="pomodoro-card p-4 mb-3">
      <h2 className="h6 text-muted mb-3 text-uppercase">Objetivos de hoy</h2>
      <div className="d-flex align-items-center gap-4">
        <div className="progress-circle" style={{ width: size, height: size }}>
          <svg width={size} height={size} aria-hidden>
            <circle
              className="progress-circle-bg"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={8}
            />
            <circle
              className="progress-circle-fill"
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={8}
              strokeDasharray={`${strokeDasharray} ${circumference}`}
            />
          </svg>
          <span className="progress-circle-text" style={{ fontSize: '1.25rem' }}>
            {completados}/{objetivo}
          </span>
        </div>
        <div>
          <p className="mb-0 fw-semibold">{label}</p>
          <p className="mb-0 small text-muted">completados hoy</p>
        </div>
      </div>
    </div>
  );
}

export default DailyGoalsCard;
