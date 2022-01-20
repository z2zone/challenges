import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [newText, setNewtext] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const singleTodoItem = {
      id: new Date().getTime(),
      isComplete: false,
      text: singleTodo,
    };
    setTodoList([...todoList, singleTodoItem]);
    setSingleTodo("");
  };

  const handleDelete = (id) => {
    const deletedList = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(deletedList);
  };

  const handleEditText = (id) => {
    const editedList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });
    setTodoList(editedList);
    setNewtext("");
    setEditId(null);
  };

  const handleToggle = (id) => {
    const toggledList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(toggledList);
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setSingleTodo(e.target.value);
            }}
            value={singleTodo}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="list">
        {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              {editId === todo.id ? (
                <div>
                  <textarea
                    cols="30"
                    rows="10"
                    value={newText}
                    onChange={(e) => {
                      setNewtext(e.target.value);
                    }}
                  ></textarea>
                  <button
                    onClick={() => {
                      setEditId(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleEditText(todo.id);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              ) : (
                <div>
                  <span
                    style={{
                      textDecoration: todo.isComplete ? "line-through" : "",
                    }}
                    onClick={() => handleToggle(todo.id)}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div>Active Todo Left: {todoList.length}</div>
    </div>
  );
}

export default App;
