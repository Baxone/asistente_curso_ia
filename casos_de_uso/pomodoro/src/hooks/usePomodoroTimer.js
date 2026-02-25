import { useEffect } from 'react';
import { usePomodoroStore } from '../stores/pomodoroStore';
import { useStatsStore } from '../stores/statsStore';

/**
 * Hook que ejecuta el tick del temporizador cada segundo.
 * Cada sesión de trabajo completada = 1 pomodoro en estadísticas (no se espera al ciclo de 4).
 * Al completar una sesión de trabajo (transición a descanso), incrementa pomodoros y tiempo.
 */
export function usePomodoroTimer() {
  const tick = usePomodoroStore((s) => s.tick);
  const enPausa = usePomodoroStore((s) => s.enPausa);
  const incrementarPomodoro = useStatsStore((s) => s.incrementarPomodoro);
  const añadirTiempo = useStatsStore((s) => s.añadirTiempo);
  const duracionTrabajo = usePomodoroStore((s) => s.duracionTrabajo);

  useEffect(() => {
    if (enPausa) return;

    const intervalId = setInterval(() => {
      const sesionTerminada = tick();
      if (sesionTerminada) {
        const state = usePomodoroStore.getState();
        if (state.esDescanso) {
          incrementarPomodoro();
          añadirTiempo(duracionTrabajo);
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tick, enPausa, incrementarPomodoro, añadirTiempo, duracionTrabajo]);
}
