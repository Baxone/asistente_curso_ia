import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePomodoroStore } from '../stores/pomodoroStore';
import { useTaskStore } from '../stores/taskStore';
import { usePomodoroTimer } from '../hooks/usePomodoroTimer';
import TimerCircle from '../components/TimerCircle';

/**
 * Formatea el tipo de sesión para mostrar al usuario.
 * @param {boolean} esDescanso
 * @param {boolean} esDescansoLargo
 * @returns {string}
 */
function getTipoSesion(esDescanso, esDescansoLargo) {
  if (esDescansoLargo) return 'Descanso largo';
  if (esDescanso) return 'Descanso';
  return 'Trabajo';
}

/**
 * Página del temporizador Pomodoro.
 * Requiere tarea seleccionada para iniciar.
 * @returns {JSX.Element} Elemento JSX del componente PomodoroPage.
 */
function PomodoroPage() {
  const tareaActiva = useTaskStore((s) => {
    if (!s.tareaActiva) return null;
    return s.tasks.find((t) => t.id === s.tareaActiva) ?? null;
  });
  const tasks = useTaskStore((s) => s.tasks);
  const setTareaActiva = useTaskStore((s) => s.setTareaActiva);

  const {
    tiempoRestante,
    duracionActual,
    enPausa,
    sesionActual,
    esDescanso,
    esDescansoLargo,
    sesionesPorCiclo,
    duracionTrabajo,
    start,
    pause,
    reset,
    skip,
    iniciarSesionTrabajo,
  } = usePomodoroStore();

  usePomodoroTimer();

  useEffect(() => {
    iniciarSesionTrabajo();
  }, [iniciarSesionTrabajo]);

  const sinTarea = !tareaActiva && tasks.length > 0;
  const sinTareas = tasks.length === 0;

  if (sinTareas) {
    return (
      <div className="container py-4">
        <Link to="/tareas/nueva" className="btn btn-primary mb-3">
          ← Crear tarea
        </Link>
        <div className="alert alert-warning">
          Debes crear al menos una tarea para usar el temporizador Pomodoro.
          <Link to="/tareas/nueva" className="alert-link ms-1">
            Crear tarea
          </Link>
        </div>
      </div>
    );
  }

  if (sinTarea) {
    return (
      <div className="container py-4">
        <Link to="/" className="btn btn-outline-secondary mb-3">
          ← Volver
        </Link>
        <h2 className="mb-3">Selecciona una tarea</h2>
        <p className="text-muted mb-4">
          Elige la tarea con la que vas a trabajar antes de iniciar el timer.
        </p>
        <div className="list-group">
          {tasks
            .filter((t) => !t.completada)
            .map((t) => (
              <button
                key={t.id}
                type="button"
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                onClick={() => {
                  setTareaActiva(t.id);
                }}
              >
                <span>{t.titulo}</span>
                <span
                  className={`badge bg-${
                    t.prioridad === 'alta'
                      ? 'danger'
                      : t.prioridad === 'media'
                        ? 'warning'
                        : 'success'
                  }`}
                >
                  {t.prioridad}
                </span>
              </button>
            ))}
        </div>
      </div>
    );
  }

  const tipoSesion = getTipoSesion(esDescanso, esDescansoLargo);
  const sesionLabel = esDescanso
    ? ''
    : `${sesionActual}/${sesionesPorCiclo} · ${duracionTrabajo} min`;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/" className="btn btn-outline-secondary">
          ← Volver
        </Link>
        <Link to="/configuracion" className="btn btn-outline-secondary">
          ⚙ Configuración
        </Link>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h6 className="text-muted mb-1">{tipoSesion}</h6>
          <h5 className="mb-0">{tareaActiva.titulo}</h5>
          {sesionLabel && <small className="text-muted">{sesionLabel}</small>}
        </div>
      </div>

      <div className="mb-4">
        <TimerCircle tiempoRestante={tiempoRestante} duracionTotal={duracionActual} />
      </div>

      <div className="d-flex justify-content-center gap-2 flex-wrap">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={reset}
          title="Reiniciar"
        >
          ↺ Reiniciar
        </button>
        <button
          type="button"
          className={`btn ${enPausa ? 'btn-success' : 'btn-warning'}`}
          onClick={enPausa ? start : pause}
          title={enPausa ? 'Iniciar' : 'Pausar'}
        >
          {enPausa ? '▶ Iniciar' : '⏸ Pausar'}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={skip}
          title="Saltar sesión"
        >
          ⏭ Saltar
        </button>
      </div>
    </div>
  );
}

export default PomodoroPage;
