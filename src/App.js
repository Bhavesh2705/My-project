import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    if (inputText.trim() !== "") {
      setItems(prevItems => [...prevItems, inputText]);
      setInputText("");
    }
  }

  function clearAll() {
    setItems([]);
  }

  function deleteItem(id) {
    setItems(prevItems => prevItems.filter((_, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <form className="form" onSubmit={addItem}>
        <input onChange={handleChange} type="text" value={inputText} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>

      {items.length > 0 && (
        <button onClick={clearAll} className="clear-btn">
          <span>Clear All</span>
        </button>
      )}

      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onDelete={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
