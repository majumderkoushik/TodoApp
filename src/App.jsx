
import "./App.css"
import TodoInput from './components/TodoInput'
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { ThemeProvider } from "./components/ToggleButton/ThemeContext";
import ToggleButton from "./components/ToggleButton/ToggleButton";
function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { isDarkMode } = useTheme();
const addItem = (newItem) => {
  setItems([...items, newItem]);
};



  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <ThemeProvider>
    <div className=" flex items-center flex-col">
    <div className="max-w-md mx-auto p-4 box w-full {isDarkMode ? 'dark-mode-content' : 'light-mode-content'}" >
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 mb-4 w-full"
      />
       <TodoInput addItem={addItem} />
      <TodoList items={items} deleteItem={deleteItem} searchTerm={searchTerm} setItems={setItems} />
 
    </div>
    <ToggleButton />
    </div>
    </ThemeProvider>
  );
}
export default App;