/**
 * Badge de prioridad con colores: alta (rojo), media (amarillo), baja (verde).
 * @param {Object} props - Propiedades del componente.
 * @param {'alta'|'media'|'baja'} props.prioridad - Nivel de prioridad de la tarea.
 * @returns {JSX.Element} Elemento JSX del componente PriorityBadge.
 */
function PriorityBadge({ prioridad = 'media' }) {
  const classMap = {
    alta: 'priority-badge priority-alta',
    media: 'priority-badge priority-media',
    baja: 'priority-badge priority-baja',
  };
  const labelMap = {
    alta: 'Alta',
    media: 'Media',
    baja: 'Baja',
  };
  return (
    <span className={classMap[prioridad] || classMap.media}>
      {labelMap[prioridad] || labelMap.media}
    </span>
  );
}

export default PriorityBadge;
