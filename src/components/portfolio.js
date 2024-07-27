import React, { useState } from 'react';
import AddStockForm from './add-stock-form';
import StockList from './stock-list';
import PortfolioSummary from './portfolio-summary';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  const addStock = (newStock) => {
    setPortfolio((prevPortfolio) => [
      ...prevPortfolio,
      { ...newStock, initialMarketValue: newStock.shares * newStock.currentPrice },
    ]);
  };

  const updateStock = (updatedStock) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((stock) =>
        stock.name === updatedStock.name ? updatedStock : stock
      )
    );
  };

  const removeStock = (stockName) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.name !== stockName)
    );
  };

  return (
    <div className="container mt-4">
      <h2>My Stock Portfolio</h2>
      <PortfolioSummary stocks={portfolio} />
      <StockList
        stocks={portfolio}
        onUpdateStock={updateStock}
        onRemoveStock={removeStock}
      />
      <AddStockForm addStock={addStock} />
    </div>
  );
};

export default Portfolio;
