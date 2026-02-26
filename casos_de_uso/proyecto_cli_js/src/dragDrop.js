// Formateado con prettier el dia 2026-02-26 - dragDrop.js
import { moveTask } from "./store.js";

/** @constant {string} Clase Tailwind para resaltar la columna durante el drag */
const DROP_HIGHLIGHT_CLASS = "ring-2 ring-blue-400 bg-blue-50";

/**
 * Inicializa los event listeners de drag and drop en las tarjetas y columnas.
 * Debe llamarse después de cada renderizado del board.
 * @param {() => void} onTaskMoved - Callback que se ejecuta tras mover una tarea (para re-renderizar)
 */
export function initDragAndDrop(onTaskMoved) {
  const cards = document.querySelectorAll(".task-card");
  const columns = document.querySelectorAll(".column");

  cards.forEach((card) => {
    card.addEventListener("dragstart", handleDragStart);
  });

  columns.forEach((column) => {
    column.addEventListener("dragover", handleDragOver);
    column.addEventListener("dragenter", handleDragEnter);
    column.addEventListener("dragleave", handleDragLeave);
    column.addEventListener("drop", (e) => handleDrop(e, onTaskMoved));
  });
}

/**
 * Maneja el inicio del arrastre. Guarda el ID de la tarea en dataTransfer.
 * @param {DragEvent} e - Evento dragstart
 */
function handleDragStart(e) {
  const taskId = e.target.closest(".task-card")?.dataset.taskId;
  if (taskId) {
    e.dataTransfer.setData("text/plain", taskId);
    e.dataTransfer.effectAllowed = "move";
    e.target.classList.add("opacity-50");
  }
}

/**
 * Permite soltar en la zona. Previene el comportamiento por defecto.
 * @param {DragEvent} e - Evento dragover
 */
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

/**
 * Añade feedback visual al entrar en una columna.
 * @param {DragEvent} e - Evento dragenter
 */
function handleDragEnter(e) {
  const column = e.target.closest(".column");
  if (column) {
    column.classList.add(...DROP_HIGHLIGHT_CLASS.split(" "));
  }
}

/**
 * Quita el feedback visual al salir de una columna.
 * @param {DragEvent} e - Evento dragleave
 */
function handleDragLeave(e) {
  const column = e.target.closest(".column");
  const related = e.relatedTarget;
  if (column && (!related || !column.contains(related))) {
    column.classList.remove(...DROP_HIGHLIGHT_CLASS.split(" "));
  }
}

/**
 * Procesa el drop: mueve la tarea a la columna destino y re-renderiza.
 * @param {DragEvent} e - Evento drop
 * @param {() => void} onTaskMoved - Callback para re-renderizar
 */
function handleDrop(e, onTaskMoved) {
  e.preventDefault();
  const column = e.target.closest(".column");
  if (!column) return;

  column.classList.remove(...DROP_HIGHLIGHT_CLASS.split(" "));

  const taskId = e.dataTransfer.getData("text/plain");
  const newColumn = column.dataset.columnId;

  if (taskId && newColumn) {
    const moved = moveTask(taskId, newColumn);
    if (moved && typeof onTaskMoved === "function") {
      onTaskMoved();
    }
  }

  document
    .querySelectorAll(".task-card")
    .forEach((c) => c.classList.remove("opacity-50"));
}
