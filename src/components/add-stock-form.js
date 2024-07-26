import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddStockForm = ({ addStock }) => {
  const [newStock, setNewStock] = useState({
    name: '',
    shares: '',
    costPerShare: '',
    currentPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStock((prevStock) => ({
      ...prevStock,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStock(newStock); 
    setNewStock({
      name: '',
      shares: 0,
      costPerShare: 0,
      currentPrice: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Stock Name:</label>
        <input
          type="text"
          name="name"
          value={newStock.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="shares">Number of Shares:</label>
        <input
          type="number"
          name="shares"
          value={isNaN(newStock.shares) ? "" : newStock.shares} 
          onChange={handleChange}
          placeholder="Enter number of shares"
        />
      </div>
      <div>
        <label htmlFor="costPerShare">Cost per Share:</label>
        <input
          type="number"
          name="costPerShare"
          value={isNaN(newStock.costPerShare) ? "" : newStock.costPerShare}
          onChange={handleChange}
          placeholder="Enter cost per share"
        />
      </div>
      <div>
        <label htmlFor="currentPrice">Current Price:</label>
        <input
          type="number"
          name="currentPrice"
          value={isNaN(newStock.currentPrice) ? "" : newStock.currentPrice}
          onChange={handleChange}
          placeholder="Enter current price"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

AddStockForm.propTypes = {
  addStock: PropTypes.func.isRequired,
};

export default AddStockForm;
