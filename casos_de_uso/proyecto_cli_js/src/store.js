// Formateado con prettier el dia 2026-02-26 - store.js
// Formateado con prettier el dia 2026-02-26 - store.js
/** @constant {string} Clave de localStorage donde se guardan las tareas */
const STORAGE_KEY = "kanban-tasks";

/**
 * Representa una tarea del Kanban.
 * @typedef {Object} Task
 * @property {string} id - Identificador único de la tarea
 * @property {string} title - Título de la tarea
 * @property {'inicio'|'en-proceso'|'terminado'} column - Columna actual de la tarea
 * @property {number} createdAt - Timestamp de creación
 */

/**
 * Obtiene todas las tareas almacenadas en localStorage.
 * @returns {Task[]} Array de tareas. Si no hay datos, devuelve array vacío.
 */
export function getTasks() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Guarda el array de tareas en localStorage.
 * @param {Task[]} tasks - Array de tareas a persistir
 */
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Crea una nueva tarea en la columna "inicio".
 * @param {string} title - Título de la tarea
 * @returns {Task} La tarea creada
 */
export function addTask(title) {
  const tasks = getTasks();
  const task = {
    id: crypto.randomUUID(),
    title: title.trim(),
    column: "inicio",
    createdAt: Date.now(),
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
}

/**
 * Mueve una tarea a otra columna.
 * @param {string} taskId - ID de la tarea a mover
 * @param {'inicio'|'en-proceso'|'terminado'} newColumn - Columna destino
 * @returns {boolean} true si se movió correctamente, false si no se encontró la tarea
 */
export function moveTask(taskId, newColumn) {
  const tasks = getTasks();
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return false;
  task.column = newColumn;
  saveTasks(tasks);
  return true;
}

/**
 * Elimina una tarea por su ID.
 * @param {string} taskId - ID de la tarea a eliminar
 * @returns {boolean} true si se eliminó correctamente, false si no se encontró
 */
export function deleteTask(taskId) {
  const allTasks = getTasks();
  const tasks = allTasks.filter((t) => t.id !== taskId);
  if (tasks.length === allTasks.length) return false;
  saveTasks(tasks);
  return true;
}
