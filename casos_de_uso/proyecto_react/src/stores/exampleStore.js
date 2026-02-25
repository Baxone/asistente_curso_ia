import { create } from 'zustand';

/**
 * Store de ejemplo con Zustand.
 * @type {import('zustand').UseBoundStore<{count: number, increment: () => void, decrement: () => void}>}
 */
export const useExampleStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
