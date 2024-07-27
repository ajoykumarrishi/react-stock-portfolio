import React from 'react';

function StockItem({ stock, onUpdateStock, onRemoveStock }) {
  function handleChange(e) {
    const { name, value } = e.target;
    onUpdateStock({
      ...stock,
      [name]: name === 'name' ? value : parseFloat(value),
    });
  }

  const marketValue = stock.shares * stock.currentPrice;
  const unrealizedGainLoss = stock.shares * (stock.currentPrice - stock.costPerShare);

  return (
    <tr className="text-light" style={{ fontFamily: 'monospace' }}>
      <td>{stock.name}</td>
      <td>
        <input
          type="number"
          name="shares"
          value={stock.shares}
          onChange={handleChange}
          className="form-control bg-dark text-light border-secondary"
        />
      </td>
      <td>
        <input
          type="number"
          name="costPerShare"
          value={stock.costPerShare}
          onChange={handleChange}
          className="form-control bg-dark text-light border-secondary"
        />
      </td>
      <td>
        <input
          type="number"
          name="currentPrice"
          value={stock.currentPrice}
          onChange={handleChange}
          className="form-control bg-dark text-light border-secondary"
        />
      </td>
      <td>{marketValue.toFixed(2)}</td>
      <td className={unrealizedGainLoss >= 0 ? "text-success" : "text-danger"}>
        {unrealizedGainLoss.toFixed(2)}
      </td>
      <td>
        <button 
          onClick={() => onRemoveStock(stock.name)} 
          className="btn btn-outline-danger btn-sm"
          style={{ 
            transition: 'background-color 0.3s, color 0.3s',
            ':hover': {
              backgroundColor: 'red',
              color: 'white'
            }
          }}
        >
          remove
        </button>
      </td>
    </tr>
  );
}

export default StockItem;
