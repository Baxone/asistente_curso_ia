// Formateado con prettier el dia 2026-02-26 - app.js
import { addTask, deleteTask } from "./store.js";
import { renderBoard } from "./render.js";
import { initDragAndDrop } from "./dragDrop.js";

/**
 * Re-renderiza el tablero y reinicializa el drag and drop.
 */
function refreshBoard() {
  renderBoard();
  initDragAndDrop(refreshBoard);
  bindDeleteButtons();
}

/**
 * Asocia los event listeners a los botones de eliminar de cada tarjeta.
 */
function bindDeleteButtons() {
  document.querySelectorAll(".delete-task").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".task-card");
      const taskId = card?.dataset.taskId;
      if (taskId) {
        deleteTask(taskId);
        refreshBoard();
      }
    });
  });
}

/**
 * Inicializa la aplicación: formulario, board y drag and drop.
 */
function init() {
  const form = document.getElementById("task-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("task-title");
      const title = input?.value?.trim();
      if (!title) {
        input?.focus();
        return;
      }
      addTask(title);
      input.value = "";
      refreshBoard();
    });
  }

  refreshBoard();
}

init();
