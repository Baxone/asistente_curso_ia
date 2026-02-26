import { create } from 'zustand';

/**
 * Store de ejemplo con Zustand para gestión de estado global.
 * @returns {Object} Store con estado y acciones.
 */
const useExampleStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useExampleStore;
