import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f7f7f7');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleBackgroundColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <h1 className="title">Todo App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="background-select">
        <label htmlFor="background-select">Background Color:</label>
        <select
          id="background-select"
          value={backgroundColor}
          onChange={(e) => handleBackgroundColorChange(e.target.value)}
        >
          <option value="#f7f7f7">Default</option>
          <option value="#ffcccc">Light Pink</option>
          <option value="#ccffcc">Light Green</option>
          <option value="#ccccff">Light Blue</option>
          <option value="#fff">White</option>
        </select>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
