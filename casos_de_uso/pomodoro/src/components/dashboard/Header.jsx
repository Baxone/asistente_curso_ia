/**
 * Header del Dashboard con saludo y notificaciones.
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.nombre='Usuario'] - Nombre para el saludo.
 * @returns {JSX.Element} Elemento JSX del componente Header.
 */
function Header({ nombre = 'Usuario' }) {
  const saludo = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Buenos días';
    if (h < 20) return 'Buenas tardes';
    return 'Buenas noches';
  })();

  return (
    <header className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1 className="h4 mb-1 fw-bold">{saludo},</h1>
        <p className="text-muted mb-0 small">{nombre}</p>
      </div>
      <button
        type="button"
        className="btn btn-light rounded-circle p-2 position-relative"
        aria-label="Notificaciones"
      >
        <span className="fs-5">🔔</span>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: '0.6rem' }}
        >
          2
        </span>
      </button>
    </header>
  );
}

export default Header;
