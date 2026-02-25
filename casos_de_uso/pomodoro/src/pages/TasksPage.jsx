import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TasksHeader from '../components/tasks/TasksHeader';
import DateSelector from '../components/tasks/DateSelector';
import TaskCard from '../components/TaskCard';
import { useTaskStore } from '../stores/taskStore';

/**
 * Página de listado de tareas.
 * @returns {JSX.Element} Elemento JSX del componente TasksPage.
 */
function TasksPage() {
  const navigate = useNavigate();
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [filtroEstado, setFiltroEstado] = useState('todas');

  const tasks = useTaskStore((s) => s.tasks);
  const getTasksByEstado = useTaskStore((s) => s.getTasksByEstado);
  const getTasksOrdenadasPorPrioridad = useTaskStore(
    (s) => s.getTasksOrdenadasPorPrioridad
  );
  const setTareaActiva = useTaskStore((s) => s.setTareaActiva);

  const tareasFiltradas = getTasksOrdenadasPorPrioridad(
    getTasksByEstado(filtroEstado)
  );

  /**
   * Inicia un pomodoro con la tarea seleccionada y navega a la página.
   * @param {string} taskId
   */
  const handlePlay = (taskId) => {
    setTareaActiva(taskId);
    navigate('/pomodoro');
  };

  return (
    <div className="pomodoro-page">
      <TasksHeader />
      <DateSelector
        fechaSeleccionada={fechaSeleccionada}
        onCambioFecha={setFechaSeleccionada}
      />
      <div className="d-flex gap-1 mb-3">
        {['todas', 'pendientes', 'completadas'].map((f) => (
          <button
            key={f}
            type="button"
            className={`btn btn-sm ${filtroEstado === f ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setFiltroEstado(f)}
          >
            {f === 'todas'
              ? 'Todas'
              : f === 'pendientes'
                ? 'Pendientes'
                : 'Completadas'}
          </button>
        ))}
      </div>
      {tasks.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-muted">No hay tareas. Crea una para empezar.</p>
          <Link to="/tareas/nueva" className="btn btn-primary">
            Crear tarea
          </Link>
        </div>
      ) : (
        <div>
          {tareasFiltradas.map((t) => (
            <TaskCard
              key={t.id}
              titulo={t.titulo}
              descripcion={t.descripcion}
              prioridad={t.prioridad}
              duracion="25 mins"
              completada={t.completada}
              onPlay={() => handlePlay(t.id)}
              onClick={() => handlePlay(t.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksPage;
