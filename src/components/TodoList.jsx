import React, { useState } from 'react';


function TodoList({ items, deleteItem, searchTerm, setItems }) {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedText, setEditedText] = useState('');

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (index, text) => {
    setEditingIndex(index);
    setEditedText(text);
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editedText;
    setItems(updatedItems);
    setEditingIndex(-1);
    setEditedText('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditedText('');
  };

  return (
    <ul className="mt-4 space-y-4 w-full">
      {filteredItems.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-md shadow-md transition duration-300 hover:bg-blue-50 dark:hover:bg-blue-800 ${
            editingIndex === index ? 'border-2 border-blue-500' : ''
          }`}
        >
          {editingIndex === index ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          ) : (
            <span className="text-gray-800 dark:text-white mx-10 justify-between">
              {item}
            </span>
          )}
          <div className="flex space-x-2">
            {editingIndex === index ? (
              <>
                <button
                  onClick={() => handleSaveEdit(index)}
                  className="text-green-500 hover:text-green-700 focus:outline-none"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(index, item)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}


  export default TodoList;
  
  


  
 