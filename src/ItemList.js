import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ItemDetails from './ItemDetails';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://quran-api-server.onrender.com/surah')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
