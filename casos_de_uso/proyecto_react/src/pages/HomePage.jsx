import { Link } from 'react-router-dom';

/**
 * Página de inicio de la aplicación.
 * @returns {JSX.Element} Elemento JSX del componente HomePage.
 */
function HomePage() {
  return (
    <div className="container py-5 text-center">
      <h1 className="mb-4">Proyecto React</h1>
      <p className="lead mb-4">Bienvenido a la aplicación.</p>
      <Link to="/login" className="btn btn-primary btn-lg">
        Iniciar sesión
      </Link>
    </div>
  );
}

export default HomePage;
