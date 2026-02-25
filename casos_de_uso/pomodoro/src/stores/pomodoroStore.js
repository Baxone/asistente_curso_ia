import { create } from 'zustand';

/**
 * Store del temporizador Pomodoro.
 * Gestiona duraciones, estado del timer y ciclos trabajo/descanso.
 * @type {import('zustand').UseBoundStore<import('./pomodoroStore').PomodoroStore>}
 */
export const usePomodoroStore = create((set, get) => ({
  // Configuración
  duracionTrabajo: 25,
  duracionDescanso: 5,
  duracionDescansoLargo: 30,
  sesionesPorCiclo: 4,

  // Estado del timer
  tiempoRestante: 25 * 60,
  duracionActual: 25 * 60,
  enPausa: true,
  sesionActual: 1,
  esDescanso: false,
  esDescansoLargo: false,

  /**
   * Inicia el temporizador.
   */
  start: () => set({ enPausa: false }),

  /**
   * Pausa el temporizador.
   */
  pause: () => set({ enPausa: true }),

  /**
   * Reinicia el temporizador a la duración actual de la sesión.
   */
  reset: () => {
    const state = get();
    const duracion = state.esDescansoLargo
      ? state.duracionDescansoLargo * 60
      : state.esDescanso
        ? state.duracionDescanso * 60
        : state.duracionTrabajo * 60;
    return set({ tiempoRestante: duracion, duracionActual: duracion });
  },

  /**
   * Decrementa el tiempo restante en 1 segundo.
   * Retorna true si la sesión ha terminado.
   * @returns {boolean} true si la sesión terminó
   */
  tick: () => {
    const state = get();
    if (state.enPausa || state.tiempoRestante <= 0) return false;

    const nuevoTiempo = state.tiempoRestante - 1;
    if (nuevoTiempo > 0) {
      set({ tiempoRestante: nuevoTiempo });
      return false;
    }

    // Sesión completada
    if (state.esDescanso) {
      // Fin descanso → volver a trabajo
      const duracionTrabajo = state.duracionTrabajo * 60;
      set({
        tiempoRestante: duracionTrabajo,
        duracionActual: duracionTrabajo,
        esDescanso: false,
        esDescansoLargo: false,
        sesionActual: state.esDescansoLargo ? 1 : state.sesionActual,
      });
    } else {
      // Fin trabajo → descanso corto o largo
      const esUltimaSesion = state.sesionActual >= state.sesionesPorCiclo;
      const duracionDescanso = esUltimaSesion
        ? state.duracionDescansoLargo * 60
        : state.duracionDescanso * 60;
      set({
        tiempoRestante: duracionDescanso,
        duracionActual: duracionDescanso,
        esDescanso: true,
        esDescansoLargo: esUltimaSesion,
        sesionActual: esUltimaSesion ? 1 : state.sesionActual + 1,
      });
    }
    return true;
  },

  /**
   * Salta a la siguiente sesión (descanso o trabajo).
   */
  skip: () => {
    const state = get();
    if (state.esDescanso) {
      const duracionTrabajo = state.duracionTrabajo * 60;
      set({
        tiempoRestante: duracionTrabajo,
        duracionActual: duracionTrabajo,
        esDescanso: false,
        esDescansoLargo: false,
        sesionActual: state.esDescansoLargo ? 1 : state.sesionActual,
      });
    } else {
      const esUltimaSesion = state.sesionActual >= state.sesionesPorCiclo;
      const duracionDescanso = esUltimaSesion
        ? state.duracionDescansoLargo * 60
        : state.duracionDescanso * 60;
      set({
        tiempoRestante: duracionDescanso,
        duracionActual: duracionDescanso,
        esDescanso: true,
        esDescansoLargo: esUltimaSesion,
        sesionActual: esUltimaSesion ? 1 : state.sesionActual + 1,
      });
    }
  },

  /**
   * Actualiza la configuración del timer.
   * @param {Object} config - Configuración parcial
   * @param {number} [config.duracionTrabajo]
   * @param {number} [config.duracionDescanso]
   * @param {number} [config.duracionDescansoLargo]
   * @param {number} [config.sesionesPorCiclo]
   */
  setConfig: (config) => {
    set((state) => {
      const merged = { ...state, ...config };
      if (!state.enPausa) return merged;
      const duracion = merged.esDescansoLargo
        ? merged.duracionDescansoLargo * 60
        : merged.esDescanso
          ? merged.duracionDescanso * 60
          : merged.duracionTrabajo * 60;
      return {
        ...merged,
        tiempoRestante: duracion,
        duracionActual: duracion,
      };
    });
  },

  /**
   * Inicializa el timer para una nueva sesión de trabajo.
   */
  iniciarSesionTrabajo: () => {
    const state = get();
    const duracion = state.duracionTrabajo * 60;
    set({
      tiempoRestante: duracion,
      duracionActual: duracion,
      enPausa: true,
      esDescanso: false,
      esDescansoLargo: false,
      sesionActual: 1,
    });
  },
}));
