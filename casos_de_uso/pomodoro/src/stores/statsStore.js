import { create } from 'zustand';

/**
 * Store de estadísticas.
 * @type {import('zustand').UseBoundStore<import('./statsStore').StatsStore>}
 */
export const useStatsStore = create((set, get) => ({
  pomodorosCompletados: 0,
  tiempoTotalTrabajo: 0,
  tareasCompletadas: 0,
  objetivoDiario: 10,

  /**
   * Incrementa el contador de pomodoros completados.
   */
  incrementarPomodoro: () =>
    set((state) => ({ pomodorosCompletados: state.pomodorosCompletados + 1 })),

  /**
   * Añade minutos de trabajo al total.
   * @param {number} minutos
   */
  añadirTiempo: (minutos) =>
    set((state) => ({
      tiempoTotalTrabajo: state.tiempoTotalTrabajo + minutos,
    })),

  /**
   * Incrementa el contador de tareas completadas.
   */
  marcarTareaCompletada: () =>
    set((state) => ({ tareasCompletadas: state.tareasCompletadas + 1 })),

  /**
   * Establece el objetivo diario (pomodoros).
   * @param {number} objetivo
   */
  setObjetivoDiario: (objetivo) => set({ objetivoDiario: objetivo }),

  /**
   * Obtiene el progreso de hoy (pomodoros completados vs objetivo).
   * @returns {{ completados: number, objetivo: number, porcentaje: number }}
   */
  getProgresoHoy: () => {
    const { pomodorosCompletados, objetivoDiario } = get();
    return {
      completados: pomodorosCompletados,
      objetivo: objetivoDiario,
      porcentaje:
        objetivoDiario > 0
          ? Math.min(100, (pomodorosCompletados / objetivoDiario) * 100)
          : 0,
    };
  },
}));
