// Formateado con prettier el dia 2026-02-26 - HomePage.jsx
import Button from "../components/Button";

/**
 * Página de inicio de la aplicación.
 * @returns {JSX.Element} Elemento JSX del componente HomePage.
 */
function HomePage() {
  const handlePrimaryClick = () => {
    alert("Botón primary pulsado");
  };

  const handleSecondaryClick = () => {
    alert("Botón secondary pulsado");
  };

  const handleDangerClick = () => {
    alert("Botón danger pulsado");
  };

  return (
    <div className="container py-5 text-center">
      <h1 className="mb-4">Caso de Uso - Hooks</h1>
      <p className="lead mb-4">
        Proyecto inicial listo para trabajar con React Hooks.
      </p>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        <div className="d-flex flex-column gap-2">
          <Button
            name="Primary"
            onClick={handlePrimaryClick}
            variant="primary"
          />
          <Button
            name="Secondary"
            onClick={handleSecondaryClick}
            variant="secondary"
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <Button name="Danger" onClick={handleDangerClick} variant="danger" />
          <Button
            name="Deshabilitado"
            onClick={() => {  }}
            disabled
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
