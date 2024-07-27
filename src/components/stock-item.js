import React, { useState } from 'react';

const StockItem = ({ stock, onUpdateStock, onRemoveStock }) => {
  const [updatedStock, setUpdatedStock] = useState(stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === 'name' ? value : parseInt(value, 10);
    setUpdatedStock({
      ...updatedStock,
      [name]: isNaN(updatedValue) || updatedValue < 0 ? stock[name] : updatedValue,
    });
    onUpdateStock({
      ...stock,
      [name]: isNaN(updatedValue) || updatedValue < 0 ? stock[name] : updatedValue,
    });
  };

  return (
    <tr> 
      <td>{updatedStock.name}</td>
      <td>
        <input 
          type="number" 
          name="shares" 
          value={updatedStock.shares} 
          onChange={handleChange} 
        />
      </td>
      <td>
        <input
          type="number"
          name="costPerShare"
          value={updatedStock.costPerShare}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="currentPrice"
          value={updatedStock.currentPrice}
          onChange={handleChange}
        />
      </td>
      <td>{updatedStock.shares * updatedStock.currentPrice}</td>
      <td>{updatedStock.shares * (updatedStock.currentPrice - updatedStock.costPerShare)}</td>
      <td>
        <button onClick={() => onRemoveStock(updatedStock.name)}>Remove</button>
      </td>
    </tr>
  );
};

export default StockItem;
