import React from 'react';

function PortfolioSummary({ stocks }) {
  const totalValue = stocks.reduce((sum, stock) => {
    return sum + stock.shares * stock.currentPrice;
  }, 0);

  const totalProfitLoss = stocks.reduce((sum, stock) => {
    return sum + stock.shares * (stock.currentPrice - stock.costPerShare);
  }, 0);

  return (
    <div className="portfolio-summary">
      <h2>Portfolio Summary</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <p>Total Profit/Loss: ${totalProfitLoss.toFixed(2)}</p>
    </div>
  );
}

export default PortfolioSummary;
