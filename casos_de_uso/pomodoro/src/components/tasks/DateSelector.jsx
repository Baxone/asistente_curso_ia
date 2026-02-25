/**
 * Selector horizontal de días (Mon 4, Tue 5...).
 * @param {Object} props - Propiedades del componente.
 * @param {Date} props.fechaSeleccionada - Fecha actualmente seleccionada.
 * @param {Function} props.onCambioFecha - Callback al cambiar de día.
 * @param {number} [props.dias=7] - Número de días a mostrar.
 * @returns {JSX.Element} Elemento JSX del componente DateSelector.
 */
function DateSelector({ fechaSeleccionada, onCambioFecha, dias = 7 }) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const items = [];

  for (let i = -2; i <= dias - 3; i++) {
    const d = new Date(hoy);
    d.setDate(d.getDate() + i);
    const esHoy = d.getTime() === hoy.getTime();
    const esSeleccionado =
      fechaSeleccionada &&
      d.getDate() === fechaSeleccionada.getDate() &&
      d.getMonth() === fechaSeleccionada.getMonth();

    items.push(
      <button
        key={d.toISOString()}
        type="button"
        className={`btn flex-grow-1 py-2 px-1 d-flex flex-column align-items-center ${
          esSeleccionado ? 'btn-primary' : esHoy ? 'btn-outline-primary' : 'btn-outline-secondary'
        }`}
        onClick={() => onCambioFecha(d)}
      >
        <span className="small">{diasSemana[d.getDay()]}</span>
        <span className="fw-semibold">{d.getDate()}</span>
      </button>
    );
  }

  return (
    <div className="d-flex gap-1 mb-4 overflow-x-auto pb-2" style={{ minHeight: '70px' }}>
      {items}
    </div>
  );
}

export default DateSelector;
