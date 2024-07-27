import React from 'react';
import StockItem from './stock-item';

function StockList({ stocks, onUpdateStock, onRemoveStock }) {
  return (
    <div className="stock-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Shares</th>
            <th>Cost per Share</th>
            <th>Current Price</th>
            <th>Total Value</th>
            <th>Profit/Loss</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <StockItem
              key={stock.id}
              stock={stock}
              onUpdateStock={onUpdateStock}
              onRemoveStock={onRemoveStock}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StockList;
