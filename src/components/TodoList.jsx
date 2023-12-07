import React, { useState } from 'react';

function TodoList({ todos, deleteTodo, updateTodo, setTodos, filterTask }) {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState({
    description: '',
    dueDate: '',
    priority: 'Medium',
    notes: '',
  });

  const handleEdit = (index, todo) => {
    setEditingIndex(index);
    setEditedTodo({ ...todo });
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editedTodo;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditedTodo({
      description: '',
      dueDate: '',
      priority: 'Medium',
      notes: '',
    });
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditedTodo({
      description: '',
      dueDate: '',
      priority: 'Medium',
      notes: '',
    });
  };
  const handleToggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isDone = !updatedTodos[index].isDone;
    setTodos(updatedTodos);
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    let filtered = [...todos];

    // Filter by task description
    if (filterTask) {
      filtered = filtered.filter((todo) =>
        todo.description.toLowerCase().includes(filterTask.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredTodos = filterTodos();

  return (
    <div className="mt-4">
    {filteredTodos.length > 0 ? (
      <div>
        <h2 className="text-lg font-semibold mb-2">Todo List</h2>
        <ul className="space-y-4">
          {filteredTodos.map((todo, index) => (
            <li
              key={todo.id}
              className={`p-4 rounded shadow-md flex justify-between items-center ${
                todo.isDone ? 'bg-lightgreen' : 'bg-white'
              }`}
            >
              <div>
                <p className={`font-semibold ${todo.isDone ? 'text-gray-500 line-through' : ''}`}>
                  {todo.description}
                </p>
                <p className={`text-gray-500 ${todo.isDone ? 'line-through' : ''}`}>
                  Due Date: {todo.dueDate}
                </p>
                <p className={`text-gray-500 ${todo.isDone ? 'line-through' : ''}`}>
                  Priority: {todo.priority}
                </p>
                <p className={`text-gray-500 ${todo.isDone ? 'line-through' : ''}`}>
                  Notes: {todo.notes}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index, todo)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleToggleDone(index)}
                  className={`text-white p-2 rounded ${
                    todo.isDone ? 'bg-red-500' : 'bg-green-500'
                  } hover:bg-opacity-70 focus:outline-none`}
                >
                  {todo.isDone ? 'Undo' : 'Done'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>No todos found.</p>
    )}
  </div>
);
}

export default TodoList;




