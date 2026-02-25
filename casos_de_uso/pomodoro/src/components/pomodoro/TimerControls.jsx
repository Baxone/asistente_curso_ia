/**
 * Controles del temporizador: reiniciar, pausar, saltar.
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.enPausa - Si el timer está pausado.
 * @param {Function} props.onPause - Callback al pausar/reanudar.
 * @param {Function} props.onReset - Callback al reiniciar.
 * @param {Function} props.onSkip - Callback al saltar.
 * @returns {JSX.Element} Elemento JSX del componente TimerControls.
 */
function TimerControls({ enPausa, onPause, onReset, onSkip }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
      <button
        type="button"
        className="btn btn-light rounded-circle p-2"
        onClick={onReset}
        aria-label="Reiniciar"
      >
        <span className="fs-4">↺</span>
      </button>
      <button
        type="button"
        className="btn btn-pomodoro-play"
        onClick={onPause}
        aria-label={enPausa ? 'Reanudar' : 'Pausar'}
      >
        {enPausa ? '▶' : '⏸'}
      </button>
      <button
        type="button"
        className="btn btn-light rounded-circle p-2"
        onClick={onSkip}
        aria-label="Saltar"
      >
        <span className="fs-4">⏭</span>
      </button>
    </div>
  );
}

export default TimerControls;
