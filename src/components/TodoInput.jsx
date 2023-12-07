import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [newTodo, setNewTodo] = useState({
    description: '',
    dueDate: '',
    priority: 'Medium',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleAddTodo = () => {
    if (newTodo.description.trim() !== '' && newTodo.dueDate !== '' && newTodo.priority !== '') {
      
      addTodo(newTodo);
      setNewTodo({
        description: '',
        dueDate: '',
        priority: 'Medium',
        notes: '',
      });
    } else {
      
      alert("Please provide a description, due date, and priority before adding a todo.");
    }
  };

  return (
    <div className="mt-4 p-6 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-md shadow-md hover:shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Create New Todo</h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-white">Description:</label>
          <input
            type="text"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={newTodo.dueDate}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white">Priority:</label>
          <select
            name="priority"
            value={newTodo.priority}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-white">Notes:</label>
          <textarea
            name="notes"
            value={newTodo.notes}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          onClick={handleAddTodo}
          className="bg-white text-blue-500 p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default TodoInput;


