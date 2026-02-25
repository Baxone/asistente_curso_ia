import { usePomodoroStore } from '../stores/pomodoroStore';

/**
 * Página de configuración del temporizador Pomodoro.
 * Permite ajustar duraciones de trabajo, descanso y descanso largo.
 * @returns {JSX.Element} Elemento JSX del componente ConfigPage.
 */
function ConfigPage() {
  const {
    duracionTrabajo,
    duracionDescanso,
    duracionDescansoLargo,
    sesionesPorCiclo,
    setConfig,
  } = usePomodoroStore();

  /**
   * Maneja el cambio de un campo de configuración.
   * @param {string} campo
   * @param {number} valor
   */
  /**
   * @param {string} campo
   * @param {number} valor
   * @param {{ min?: number, max?: number }} [limites]
   */
  const handleChange = (campo, valor, limites = { min: 1, max: 60 }) => {
    const { min = 1, max = 60 } = limites;
    const num = Math.max(min, Math.min(max, Number(valor) || min));
    setConfig({ [campo]: num });
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Configuración</h1>
      <p className="text-muted mb-4">
        Ajusta las duraciones del temporizador Pomodoro.
      </p>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="duracionTrabajo" className="form-label">
              Duración trabajo (min)
            </label>
            <input
              id="duracionTrabajo"
              type="number"
              min={1}
              max={60}
              className="form-control"
              value={duracionTrabajo}
              onChange={(e) => handleChange('duracionTrabajo', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duracionDescanso" className="form-label">
              Duración descanso corto (min)
            </label>
            <input
              id="duracionDescanso"
              type="number"
              min={1}
              max={60}
              className="form-control"
              value={duracionDescanso}
              onChange={(e) => handleChange('duracionDescanso', e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duracionDescansoLargo" className="form-label">
              Duración descanso largo (min)
            </label>
            <input
              id="duracionDescansoLargo"
              type="number"
              min={1}
              max={60}
              className="form-control"
              value={duracionDescansoLargo}
              onChange={(e) =>
                handleChange('duracionDescansoLargo', e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="sesionesPorCiclo" className="form-label">
              Sesiones de trabajo antes del descanso largo
            </label>
            <input
              id="sesionesPorCiclo"
              type="number"
              min={2}
              max={10}
              className="form-control"
              value={sesionesPorCiclo}
              onChange={(e) =>
                handleChange('sesionesPorCiclo', e.target.value, {
                  min: 2,
                  max: 10,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigPage;
