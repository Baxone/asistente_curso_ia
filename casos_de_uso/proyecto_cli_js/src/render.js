// Formateado con prettier el dia 2026-02-26 - render.js
// Formateado con prettier el dia 2026-02-26 - render.js
// Formateado con prettier el dia 2026-02-26 - render.js
// Formateado con prettier el dia 2026-02-26 - render.js
// Formateado con prettier el dia 2026-02-26 - render.js
import { getTasks } from "./store.js";

/** @constant {Object.<string, string>} Mapeo de IDs de columna a títulos mostrados */
const COLUMNS = {
  inicio: "Inicio",
  "en-proceso": "En Proceso",
  terminado: "Terminado",
};

/** @constant {Object.<string, string>} Color de fondo de la ficha según la columna */
const COLUMN_CARD_COLORS = {
  inicio: "lightgrey",
  "en-proceso": "tomato",
  terminado: "lightgreen",
};

/** @constant {Object.<string, string>} Color del icono papelera según la columna */
const COLUMN_ICON_COLORS = {
  inicio: "black",
  "en-proceso": "white",
  terminado: "white",
};

/**
 * Genera el HTML de una tarjeta de tarea.
 * @param {import('./store.js').Task} task - Objeto tarea
 * @returns {HTMLElement} Elemento DOM de la tarjeta
 */
export function createTaskCard(task) {
  const card = document.createElement("div");
  const bgColor = COLUMN_CARD_COLORS[task.column] ?? "white";
  card.className =
    "task-card flex items-center justify-between gap-2 rounded-lg border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing";
  card.style.backgroundColor = bgColor;
  card.draggable = true;
  card.dataset.taskId = task.id;

  const titleEl = document.createElement("span");
  titleEl.className = "flex-1 text-slate-800 truncate";
  titleEl.textContent = task.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  const iconColor = COLUMN_ICON_COLORS[task.column] ?? "black";
  deleteBtn.className =
    "delete-task shrink-0 rounded p-1 hover:bg-red-50 hover:text-red-600 transition";
  deleteBtn.style.color = iconColor;
  deleteBtn.setAttribute("aria-label", "Eliminar tarea");
  deleteBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';

  card.appendChild(titleEl);
  card.appendChild(deleteBtn);

  return card;
}

/**
 * Renderiza el tablero Kanban con las tres columnas y sus tareas.
 */
export function renderBoard() {
  const board = document.getElementById("kanban-board");
  if (!board) return;

  const tasks = getTasks();
  board.innerHTML = "";

  for (const [columnId, columnTitle] of Object.entries(COLUMNS)) {
    const columnTasks = tasks.filter((t) => t.column === columnId);

    const column = document.createElement("div");
    column.className =
      "column flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-4 min-h-[200px]";
    column.dataset.columnId = columnId;

    const header = document.createElement("h2");
    header.className = "mb-4 text-lg font-semibold text-slate-700";
    header.textContent = columnTitle;

    const dropZone = document.createElement("div");
    dropZone.className = "drop-zone flex-1 space-y-3";

    column.appendChild(header);
    column.appendChild(dropZone);

    for (const task of columnTasks) {
      const card = createTaskCard(task);
      dropZone.appendChild(card);
    }

    board.appendChild(column);
  }
}
