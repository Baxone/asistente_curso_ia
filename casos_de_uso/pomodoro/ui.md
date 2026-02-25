# Agente UI - Proyecto Pomodoro

Instrucciones para el agente de IA al trabajar en la interfaz y diseño de la aplicación Pomodoro.

## Stack tecnológico

- **Framework**: React 19
- **Estilos**: Bootstrap 5
- **Gestión de estado**: Zustand

Usar solo esta tecnología y no sugerir otras.

## Convenciones de diseño

- Mobile-first (diseño orientado a móvil)
- Paleta: blanco base, acento azul (#0d6efd), rojo para play/pause (#dc3545)
- Prioridades: alta (rojo), media (amarillo), baja (verde)
- Tarjetas: `rounded-3`, `shadow-sm`
- Gráfico circular: SVG o CSS `conic-gradient` para progreso
- Bottom nav: `fixed-bottom`, iconos con estado activo en azul

## Componentes de UI

- `TaskCard`: icono por prioridad, título, duración, botón play
- `PriorityBadge`: colores según prioridad
- `TimerCircle`: círculo con progreso y tiempo restante
- `BottomNav`: 5 iconos (reloj, lista, +, estadísticas, configuración)

## Restricciones

- No preguntar para ejecutar acciones por terminal
- Todas las funciones documentadas con JSDoc
