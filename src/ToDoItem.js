import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleCheckbox() {
    setIsDone(prev => !prev);
  }

  return (
    <li className={`todo-item ${isDone ? "done" : ""}`}>
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleCheckbox}
        className="todo-checkbox"
      />

      {/* Task text */}
      <span className="todo-text">{props.text}</span>

      {/* Delete button */}
      <button onClick={() => props.onDelete(props.id)} className="delete-btn">
        ✕
      </button>
    </li>
  );
}

export default ToDoItem;
