# Plan: Aplicación Pomodoro

## Resumen

Aplicación de productividad con técnica Pomodoro, gestión de tareas y estadísticas. Stack: React 19, Zustand, Bootstrap 5, React Query, Jest. Diseño basado en mockup con tres pantallas principales y navegación inferior.

---

## 1. Requisitos funcionales

### Gestión de tareas

- Crear una tarea
- Editar una tarea
- Eliminar una tarea
- Marcar una tarea como completada
- Cada tarea: título, descripción, prioridad (alta, media, baja)
- Ordenar las tareas por prioridad
- Filtrar las tareas por estado (todas, pendientes, completadas)

### Temporizador Pomodoro

- Timer configurable por el usuario (por defecto 25 min trabajo, 5 min descanso)
- Ciclo: 4 pomodoros de trabajo → 1 descanso largo de 30 min
- Asociar tarea activa al pomodoro actual
- **Cada sesión de trabajo completada = 1 pomodoro en estadísticas** (no esperar al ciclo de 4)
- Tarea obligatoria para iniciar el timer

### Estadísticas

- Pomodoros completados
- Tiempo total de trabajo
- Tareas completadas
- Objetivo diario

### Restricciones técnicas

- Componentes funcionales, no clases
- Usar hooks
- Todas las funciones documentadas con JSDoc

---

## 2. Stack tecnológico

| Tecnología      | Uso                    |
|-----------------|------------------------|
| React 19        | Framework              |
| Zustand         | Gestión de estado      |
| Bootstrap 5     | Estilos                |
| React Query v5  | Peticiones (opcional)  |
| Jest            | Testing                |
| Vite            | Build tool             |

---

## 3. Modelo de datos

### Tarea

```javascript
{
  id: string,
  titulo: string,
  descripcion?: string,
  prioridad: 'alta' | 'media' | 'baja',
  completada: boolean,
  fechaCreacion: string,
  fechaCompletada?: string,
  horaInicio?: string,
  horaFin?: string
}
```

### Stores (Zustand)

**taskStore.js**

- Estado: `tasks[]`, `tareaActiva` (id de la tarea asociada al pomodoro)
- Acciones: `addTask`, `updateTask`, `deleteTask`, `toggleComplete`, `setTareaActiva`, `getTasksByEstado`, `getTasksOrdenadasPorPrioridad`

**pomodoroStore.js**

- Estado: `duracionTrabajo`, `duracionDescanso`, `duracionDescansoLargo`, `sesionesPorCiclo`, `tiempoRestante`, `enPausa`, `sesionActual`, `esDescanso`, `esDescansoLargo`
- Acciones: `start`, `pause`, `reset`, `skip`, `setConfig`, `tick`, `iniciarSesionTrabajo`

**statsStore.js**

- Estado: `pomodorosCompletados`, `tiempoTotalTrabajo`, `tareasCompletadas`, `objetivoDiario`
- Acciones: `incrementarPomodoro`, `añadirTiempo`, `marcarTareaCompletada`, `setObjetivoDiario`, `getProgresoHoy`

---

## 4. Rutas y páginas

| Ruta             | Página        | Descripción                                      |
|------------------|---------------|--------------------------------------------------|
| `/`              | DashboardPage | Saludo, tarea actual, objetivos, tareas de hoy   |
| `/pomodoro`      | PomodoroPage  | Temporizador circular, controles, tarea asociada |
| `/tareas`        | TasksPage     | Lista de tareas con filtros                     |
| `/tareas/nueva`  | NewTaskPage   | Formulario crear/editar tarea                   |
| `/estadisticas`  | StatsPage     | Pomodoros, tiempo total, tareas completadas     |
| `/configuracion` | ConfigPage    | Configurar duraciones del timer                 |

---

## 5. Lógica del temporizador

```
Trabajo (25 min) → Descanso corto (5 min) → Trabajo → Descanso corto → Trabajo → Descanso corto → Trabajo → Descanso largo (30 min) → ciclo
```

- Cada sesión de trabajo completada incrementa `pomodorosCompletados` y `tiempoTotalTrabajo`
- Sin persistencia (por defecto)
- Solo feedback visual al completar sesión

---

## 6. Componentes principales

| Componente       | Propósito                          |
|------------------|------------------------------------|
| BottomNav        | Navegación inferior (5 iconos)    |
| TimerCircle      | Círculo de progreso del timer      |
| TaskCard         | Tarjeta de tarea con prioridad     |
| PriorityBadge    | Badge de prioridad (colores)       |
| Layout           | Contenedor con Outlet y BottomNav  |

---

## 7. Hooks personalizados

| Hook              | Propósito                                      |
|-------------------|------------------------------------------------|
| usePomodoroTimer  | setInterval para tick cada segundo, actualiza stats al completar sesión de trabajo |

---

## 8. Orden de implementación

1. **Fase 1 - Base**: Proyecto Vite, dependencias, rutas, BottomNav, layout
2. **Fase 2 - Tareas**: taskStore, TaskCard, TasksPage, NewTaskPage (CRUD)
3. **Fase 3 - Pomodoro**: pomodoroStore, usePomodoroTimer, PomodoroPage, asociar tarea
4. **Fase 4 - Estadísticas**: statsStore, StatsPage
5. **Fase 5 - Dashboard**: CurrentTaskCard, TodayTasksList, botón a Pomodoro
6. **Fase 6 - Configuración**: ConfigPage con duraciones
7. **Fase 7 - Testing**: tests unitarios de stores y componentes

---

## 9. Archivos clave

| Archivo                       | Propósito                    |
|------------------------------|------------------------------|
| `src/stores/taskStore.js`    | Estado y acciones de tareas  |
| `src/stores/pomodoroStore.js`| Estado y acciones del timer  |
| `src/stores/statsStore.js`   | Estadísticas y objetivos     |
| `src/hooks/usePomodoroTimer.js` | Lógica del temporizador  |
| `src/components/BottomNav.jsx`   | Navegación inferior      |
| `src/components/TimerCircle.jsx` | Círculo de progreso     |
| `src/pages/DashboardPage.jsx`   | Pantalla principal      |
| `src/pages/PomodoroPage.jsx`    | Pantalla del temporizador |
| `src/pages/TasksPage.jsx`       | Lista de tareas         |
| `src/pages/ConfigPage.jsx`      | Configuración del timer  |

---

## 10. Estado de implementación

| Elemento        | Estado      |
|-----------------|-------------|
| Stores          | ✅ Implementado |
| usePomodoroTimer| ✅ Implementado |
| ConfigPage      | ✅ Implementado |
| PomodoroPage    | ✅ Implementado |
| NewTaskPage     | ✅ Implementado |
| TasksPage       | ✅ Implementado |
| DashboardPage   | ✅ Botón a Pomodoro |
| StatsPage       | ⏳ Pendiente |
| Editar tarea    | ⏳ Pendiente |
| Eliminar tarea  | ⏳ Pendiente |
| Persistencia    | ⏳ No requerida |
| Tests           | ⏳ Pendiente |
