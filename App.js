import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', done: false, research: false },
    { id: 2, text: 'Do laundry', done: false, research: false },
    // Add more to-do items here
  ]);

  const handleDoneClick = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleResearchClick = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, research: !todo.research } : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          research={todo.research}
          handleDoneClick={handleDoneClick}
          handleResearchClick={handleResearchClick}
        />
      ))}
    </div>
  );
};

export default App;
