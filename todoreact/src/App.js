import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: singleTodo,
      isCompleted: false,
    };
    setTodoList([...todoList].concat(newTodo));
    setSingleTodo("");
  };

  const deleteTodo = (id) => {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoList);
  };

  const handleEditText = (id) => {
    const editedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });

    setTodoList(editedTodoList);
    setNewText("");
    setEditId(null);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setSingleTodo(e.target.value)}
            value={singleTodo}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todoList.map((singleItem) => {
            return (
              <li key={singleItem.id}>
                {singleItem.text} &nbsp;
                {editId === singleItem.id ? (
                  <div>
                    <textarea
                      onChange={(e) => setNewText(e.target.value)}
                      value={newText}
                      rows="10"
                      cols="50"
                    ></textarea>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                    <button onClick={() => handleEditText(singleItem.id)}>
                      Confirm
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => deleteTodo(singleItem.id)}>
                      Delete
                    </button>
                    <button onClick={() => setEditId(singleItem.id)}>
                      Edit
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default App;
