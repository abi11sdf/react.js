import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Project</h1>
      </header>
      <ItemList items={items} addItem={addItem} />
    </div>
  );
}

export default App;
