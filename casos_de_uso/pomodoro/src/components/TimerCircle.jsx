/**
 * Círculo de progreso del temporizador Pomodoro.
 * @param {Object} props
 * @param {number} props.tiempoRestante - Segundos restantes
 * @param {number} props.duracionTotal - Duración total de la sesión en segundos
 * @returns {JSX.Element} Elemento JSX del componente TimerCircle.
 */
function TimerCircle({ tiempoRestante, duracionTotal }) {
  const porcentaje = duracionTotal > 0 ? (tiempoRestante / duracionTotal) * 100 : 0;
  const gradiente = `conic-gradient(#0d6efd ${porcentaje}%, #e9ecef ${porcentaje}%)`;

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const tiempoFormateado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

  return (
    <div
      className="d-flex align-items-center justify-content-center rounded-circle mx-auto"
      style={{
        width: 240,
        height: 240,
        background: gradiente,
        position: 'relative',
      }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center rounded-circle bg-white"
        style={{
          width: 200,
          height: 200,
          position: 'absolute',
        }}
      >
        <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          {tiempoFormateado}
        </span>
      </div>
    </div>
  );
}

export default TimerCircle;
