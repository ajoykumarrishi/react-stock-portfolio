import React, { useState } from 'react';
import StockList from './stock-list';
import PortfolioSummary from './portfolio-summary';
import AddStockForm from './add-stock-form';

function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  function addStock(newStock) {
    setPortfolio(prevPortfolio => {
      const existingStockIndex = prevPortfolio.findIndex(
        stock => stock.name.toLowerCase() === newStock.name.toLowerCase()
      );

      if (existingStockIndex !== -1) {
        const updatedStock = {
          ...prevPortfolio[existingStockIndex],
          shares: prevPortfolio[existingStockIndex].shares + parseFloat(newStock.shares),
        };
        return [
          ...prevPortfolio.slice(0, existingStockIndex),
          updatedStock,
          ...prevPortfolio.slice(existingStockIndex + 1)
        ];
      } else {
        return [
          ...prevPortfolio,
          {
            ...newStock,
            shares: parseFloat(newStock.shares),
            costPerShare: parseFloat(newStock.costPerShare),
            currentPrice: parseFloat(newStock.currentPrice),
          },
        ];
      }
    });
  }

  function updateStock(updatedStock) {
    setPortfolio(prevPortfolio =>
      prevPortfolio.map(stock =>
        stock.name === updatedStock.name ? updatedStock : stock
      )
    );
  }

  function removeStock(stockName) {
    setPortfolio(prevPortfolio => {
      const stockIndexToRemove = prevPortfolio.findIndex(
        stock => stock.name === stockName
      );
      if (stockIndexToRemove !== -1) {
        const newPortfolio = [
          ...prevPortfolio.slice(0, stockIndexToRemove),
          ...prevPortfolio.slice(stockIndexToRemove + 1)
        ];
        return newPortfolio;
      } else {
        return prevPortfolio;
      }
    });
  }

  return (
    <div className="d-flex flex-column h-100 bg-dark text-light" style={{ fontFamily: 'monospace' }}>
      <h1 className="d-flex justify-content-center">Stock Portfolio</h1>
      <div>
        <StockList
          stocks={portfolio}
          onUpdateStock={updateStock}
          onRemoveStock={removeStock}
        />
      </div>
      <div className="p-3 border-top border-secondary">
        <PortfolioSummary stocks={portfolio} />
        <AddStockForm addStock={addStock} />
      </div>
    </div>
  );
}

export default Portfolio;