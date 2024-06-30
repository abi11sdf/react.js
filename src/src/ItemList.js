import React, { useState } from 'react';

function ItemList({ items, addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      addItem(newItem);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default ItemList;
