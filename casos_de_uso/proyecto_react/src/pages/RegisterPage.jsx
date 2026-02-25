import { Link } from 'react-router-dom';

/**
 * Página de registro de usuarios (placeholder).
 * @returns {JSX.Element} Elemento JSX del componente RegisterPage.
 */
function RegisterPage() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Crear cuenta</h2>
      <p className="text-muted mb-4">Formulario de registro próximamente.</p>
      <Link to="/login" className="btn btn-outline-primary">
        Volver al login
      </Link>
    </div>
  );
}

export default RegisterPage;
