import React, { useState } from 'react';



function TodoInput({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    console.log('Adding item:', newItem);
    if (newItem.trim() !== '') {
      addItem(newItem);
      setNewItem('');
    }
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newItem}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;

