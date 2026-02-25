# Agente - Proyecto Pomodoro

Instrucciones para el agente de IA al trabajar en la aplicación Pomodoro.

## Stack tecnológico

- **Framework**: React 19
- **Gestión de estado**: Zustand
- **Estilos**: Bootstrap 5
- **Peticiones fetch**: React Query (v5)
- **Testing**: Jest

Usar solo esta tecnología y no sugerir otras.

## Convenciones de código

- Todas las funciones documentadas con JSDoc
- Componentes funcionales, no clases
- Usar hooks

## Restricciones

- No preguntar para ejecutar acciones por terminal
- Instalar las dependencias necesarias para ejecutar el proyecto

## Contexto del proyecto

- Aplicación de productividad con técnica Pomodoro
- Gestión de tareas con prioridad (alta, media, baja)
- Temporizador configurable (trabajo, descanso corto, descanso largo)
- Cada sesión de trabajo completada = 1 pomodoro en estadísticas
- Tarea obligatoria para iniciar el timer
- Sin persistencia por defecto
- Solo feedback visual (sin sonido/notificaciones)

## Archivos de referencia

- `PLAN.md` - Plan detallado de la aplicación
- `src/stores/` - taskStore, pomodoroStore, statsStore
- `src/hooks/usePomodoroTimer.js` - Lógica del temporizador
