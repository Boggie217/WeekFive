import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoItems, setTodoItems] = useState([
    { text: 'Item 1', completed: false },
    { text: 'Item 2', completed: false },
    { text: 'Item 3', completed: false },
  ]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setTodoItems((prevItems) => [
        { text: inputValue, completed: false },
        ...prevItems,
      ]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClearClicked = () => {
    setTodoItems((prevItems) => prevItems.filter((item) => !item.completed));
  };

  const handleItemStatusChange = (index, status) => {
    setTodoItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index].completed = status === 'Complete';
      return newItems;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my todo list
        </p>
        <div className="list">
          {/* Input field to add a new item */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter new item..."
          />
          {/* Button to add a new item to the Todo list */}
          <button onClick={handleAddItem}>Add stuff</button>

          {/* List of Todo items */}
          <ul>
            {todoItems.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item.completed ? 'green' : '' }}
              >
                {item.text}
                <div>
                  <input
                    type="radio"
                    name={`status-${index}`}
                    value="Complete"
                    checked={item.completed}
                    onChange={() => handleItemStatusChange(index, 'Complete')}
                  />
                  Complete
                </div>
                <div>
                  <input
                    type="radio"
                    name={`status-${index}`}
                    value="Needs Research"
                    checked={!item.completed}
                    onChange={() => handleItemStatusChange(index, 'Needs Research')}
                  />
                  Needs Research
                </div>
              </li>
            ))}
          </ul>

          {/* Clear Clicked button */}
          <button onClick={handleClearClicked}>Clear Clicked</button>
        </div>
      </header>
    </div>
  );
}

export default App;

