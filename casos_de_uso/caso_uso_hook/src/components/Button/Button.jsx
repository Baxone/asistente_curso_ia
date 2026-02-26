import { useState } from 'react';
import './Button.css';

/**
 * Componente Button reutilizable con variantes y estado de hover.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Texto del botón.
 * @param {() => void} props.onClick - Función callback al hacer clic.
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado.
 * @param {'primary'|'secondary'|'danger'} [props.variant='primary'] - Variante visual del botón.
 * @returns {JSX.Element} Elemento JSX del componente Button.
 */
function Button({ name, onClick, disabled = false, variant = 'primary' }) {
  const [isHovered, setIsHovered] = useState(false);

  const variantClass = `btn-custom--${variant}`;

  return (
    <button
      className={`btn-custom ${variantClass}`}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      {isHovered && <span className="btn-custom__check">✓</span>}
    </button>
  );
}

export default Button;
