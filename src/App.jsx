import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  
  const [filterTask, setFilterTask] = useState('');

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode', !darkMode);
    setDarkMode(!darkMode);
  };

  
  const handleTaskFilterChange = (e) => {
    setFilterTask(e.target.value);
  };

  return (
    <div className={`max-w-lg mx-auto mt-8 ${darkMode ? 'dark' : ''}`}>
    <div className="flex justify-end">
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
      
      <div className="mt-4">
        <label>Task Filter:</label>
        <input
          type="text"
          value={filterTask}
          onChange={handleTaskFilterChange}
          placeholder="Enter task..."
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className='flex flex-row'>
        <TodoInput addTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          deleteTodo={handleDeleteTodo}
          updateTodo={handleUpdateTodo}
          searchTerm={searchTerm}
          setTodos={setTodos}
          filterTask={filterTask}
        />
      </div>
    </div>
  );
}

export default App;






