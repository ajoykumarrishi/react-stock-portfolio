import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddStockForm({ addStock }) {
  const [newStock, setNewStock] = useState({
    name: '',
    shares: '',
    costPerShare: '',
    currentPrice: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewStock(prevStock => ({
      ...prevStock,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addStock(newStock);
    setNewStock({
      name: '',
      shares: '',
      costPerShare: '',
      currentPrice: '',
    });
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mt-3"
      style={{color: 'grey'}}
    >
      <div className="d-flex">
        <input
          type="text"
          name="name"
          value={newStock.name}
          onChange={handleChange}
          placeholder="Stock Name"
          className="form-control bg-dark text-light border-secondary me-2"
        />
        <input
          type="number"
          name="shares"
          value={newStock.shares}
          onChange={handleChange}
          placeholder="Number of Shares"
          className="form-control bg-dark text-light border-secondary me-2"
        />
        <input
          type="number"
          name="costPerShare"
          value={newStock.costPerShare}
          onChange={handleChange}
          placeholder="Cost per Share ($)"
          className="form-control bg-dark text-light border-secondary me-2"
        />
        <input
          type="number"
          name="currentPrice"
          value={newStock.currentPrice}
          onChange={handleChange}
          placeholder="Current Market Price ($)"
          className="form-control bg-dark text-light border-secondary me-2"
        />
        <button 
          type="submit" 
          className="btn btn-outline-primary"
          style={{ 
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: 'green',
              color: 'white'
            }
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
}

AddStockForm.propTypes = {
  addStock: PropTypes.func.isRequired,
};

export default AddStockForm;