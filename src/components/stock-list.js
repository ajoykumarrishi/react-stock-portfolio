import React from 'react';
import StockItem from './stock-item';
import PropTypes from 'prop-types';

function StockList({ stocks, onUpdateStock, onRemoveStock }) {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Shares Owned</th>
          <th>Cost per share ($)</th>
          <th>Market Price ($)</th>
          <th>Market Value ($)</th>
          <th>Unrealized Gain/Loss ($)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <StockItem
            key={stock.name}
            stock={stock}
            onUpdateStock={onUpdateStock}
            onRemoveStock={onRemoveStock}
          />
        ))}
      </tbody>
    </table>
  );
}

StockList.propTypes = {
  stocks: PropTypes.array.isRequired,
  onUpdateStock: PropTypes.func.isRequired,
  onRemoveStock: PropTypes.func.isRequired,
};

export default StockList;
