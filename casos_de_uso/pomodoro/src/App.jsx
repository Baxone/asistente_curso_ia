import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import PomodoroPage from './pages/PomodoroPage';
import TasksPage from './pages/TasksPage';
import NewTaskPage from './pages/NewTaskPage';
import StatsPage from './pages/StatsPage';
import ConfigPage from './pages/ConfigPage';

/**
 * Componente raíz de la aplicación Pomodoro.
 * @returns {JSX.Element} Elemento JSX del componente App.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="pomodoro" element={<PomodoroPage />} />
          <Route path="tareas" element={<TasksPage />} />
          <Route path="tareas/nueva" element={<NewTaskPage />} />
          <Route path="estadisticas" element={<StatsPage />} />
          <Route path="configuracion" element={<ConfigPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
