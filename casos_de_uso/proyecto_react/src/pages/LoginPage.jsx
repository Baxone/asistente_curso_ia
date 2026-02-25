import { Link } from 'react-router-dom';
import './LoginPage.css';

/**
 * Página de inicio de sesión con maquetación según diseño.
 * @returns {JSX.Element} Elemento JSX del componente LoginPage.
 */
function LoginPage() {
  return (
    <div className="login-page min-vh-100 d-flex">
      {/* Columna izquierda - Sección promocional */}
      <div className="login-hero flex-grow-1 position-relative overflow-hidden">
        <div className="login-hero__overlay" />
        <div className="login-hero__content position-absolute w-100 h-100 d-flex flex-column justify-content-between p-4">
          <div className="login-hero__logo text-white">
            <span className="d-block small text-uppercase fw-light">Diamond Series</span>
          </div>
          <div className="login-hero__image-wrapper flex-grow-1 d-flex align-items-center justify-content-center my-4">
            <div className="login-hero__image rounded overflow-hidden" />
          </div>
          <div className="login-hero__title text-white">
            <span className="d-block small text-uppercase opacity-75">Jessica Biel</span>
            <span className="d-block display-4 fw-bold text-uppercase">The Sinner</span>
          </div>
        </div>
      </div>

      {/* Columna derecha - Formulario */}
      <div className="login-form-section d-flex align-items-center justify-content-center p-5">
        <div className="login-form-card rounded-3 shadow p-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="login-form-card__title mb-0">Already Members</h2>
            <a href="#" className="login-form-card__help text-decoration-none">
              Need help?
            </a>
          </div>

          <form className="login-form">
            <div className="mb-4">
              <input
                type="text"
                className="form-control login-form__input"
                placeholder="Enter your name"
                defaultValue="Jhon Garcia Reven"
              />
            </div>
            <div className="mb-4 position-relative">
              <input
                type="password"
                className="form-control login-form__input"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="btn login-form__help-icon position-absolute"
                aria-label="Ayuda con contraseña"
              >
                ?
              </button>
            </div>

            <button type="submit" className="btn login-form__submit w-100 py-3 rounded-3 mb-4">
              Sign in
            </button>
          </form>

          <div className="text-center">
            <p className="mb-1 text-muted">Don&apos;t have an account yet?</p>
            <Link to="/register" className="login-form-card__link">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
