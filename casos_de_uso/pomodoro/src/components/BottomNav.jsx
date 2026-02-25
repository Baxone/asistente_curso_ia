import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/pomodoro', icon: '⏱', label: 'Pomodoro' },
  { to: '/tareas', icon: '📋', label: 'Tareas' },
  { to: '/tareas/nueva', icon: '➕', label: 'Nueva' },
  { to: '/estadisticas', icon: '📊', label: 'Stats' },
  { to: '/configuracion', icon: '⚙', label: 'Config' },
];

/**
 * Barra de navegación inferior con 5 iconos según el mockup.
 * @returns {JSX.Element} Elemento JSX del componente BottomNav.
 */
function BottomNav() {
  return (
    <nav
      className="navbar navbar-expand fixed-bottom bg-white border-top shadow-sm"
      style={{ height: 'var(--bottom-nav-height)' }}
    >
      <div className="container-fluid justify-content-around px-0">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link d-flex flex-column align-items-center justify-content-center text-decoration-none py-2 ${
                isActive ? 'text-primary fw-bold' : 'text-secondary'
              }`
            }
            style={{ minWidth: '60px' }}
          >
            <span style={{ fontSize: '1.5rem' }}>{icon}</span>
            <span style={{ fontSize: '0.7rem' }}>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
