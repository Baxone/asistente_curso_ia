import { create } from 'zustand';

/**
 * @typedef {Object} Tarea
 * @property {string} id
 * @property {string} titulo
 * @property {string} [descripcion]
 * @property {'alta'|'media'|'baja'} prioridad
 * @property {boolean} completada
 * @property {string} fechaCreacion
 * @property {string} [fechaCompletada]
 * @property {string} [horaInicio]
 * @property {string} [horaFin]
 */

/**
 * Genera un ID único para tareas.
 * @returns {string}
 */
function generarId() {
  return `task_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Store de tareas.
 * @type {import('zustand').UseBoundStore<import('./taskStore').TaskStore>}
 */
export const useTaskStore = create((set, get) => ({
  tasks: [],
  tareaActiva: null,

  /**
   * Añade una nueva tarea.
   * @param {Omit<Tarea, 'id'|'fechaCreacion'|'completada'>} tarea
   * @returns {Tarea}
   */
  addTask: (tarea) => {
    const nueva = {
      id: generarId(),
      titulo: tarea.titulo,
      descripcion: tarea.descripcion ?? '',
      prioridad: tarea.prioridad ?? 'media',
      completada: false,
      fechaCreacion: new Date().toISOString(),
    };
    set((state) => ({ tasks: [...state.tasks, nueva] }));
    return nueva;
  },

  /**
   * Actualiza una tarea existente.
   * @param {string} id
   * @param {Partial<Tarea>} actualizacion
   */
  updateTask: (id, actualizacion) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...actualizacion } : t
      ),
    }));
  },

  /**
   * Elimina una tarea.
   * @param {string} id
   */
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
      tareaActiva: state.tareaActiva === id ? null : state.tareaActiva,
    }));
  },

  /**
   * Marca o desmarca una tarea como completada.
   * @param {string} id
   */
  toggleComplete: (id) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              completada: !t.completada,
              fechaCompletada: !t.completada
                ? new Date().toISOString()
                : undefined,
            }
          : t
      ),
    }));
  },

  /**
   * Establece la tarea activa (asociada al pomodoro).
   * @param {string|null} id
   */
  setTareaActiva: (id) => set({ tareaActiva: id }),

  /**
   * Obtiene la tarea activa.
   * @returns {Tarea|null}
   */
  getTareaActiva: () => {
    const { tasks, tareaActiva } = get();
    return tareaActiva ? tasks.find((t) => t.id === tareaActiva) ?? null : null;
  },

  /**
   * Obtiene tareas filtradas por estado.
   * @param {'todas'|'pendientes'|'completadas'} estado
   * @returns {Tarea[]}
   */
  getTasksByEstado: (estado) => {
    const { tasks } = get();
    if (estado === 'pendientes') return tasks.filter((t) => !t.completada);
    if (estado === 'completadas') return tasks.filter((t) => t.completada);
    return tasks;
  },

  /**
   * Obtiene tareas ordenadas por prioridad (alta, media, baja).
   * @param {Tarea[]} [lista]
   * @returns {Tarea[]}
   */
  getTasksOrdenadasPorPrioridad: (lista) => {
    const orden = { alta: 0, media: 1, baja: 2 };
    const tareas = lista ?? get().tasks;
    return [...tareas].sort(
      (a, b) => orden[a.prioridad] - orden[b.prioridad]
    );
  },
}));
