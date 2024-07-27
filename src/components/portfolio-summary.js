import React from 'react';

function PortfolioSummary({ stocks }) {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.shares * stock.currentPrice, 0);
  const totalProfitLoss = stocks.reduce((sum, stock) => sum + stock.shares * (stock.currentPrice - stock.costPerShare), 0);

  return (
    <div className="d-flex justify-content-between">
      <h4>Portfolio value: $ {totalValue.toFixed(2)}</h4>
      <h4 className={totalProfitLoss >= 0 ? "text-success" : "text-danger"}>
        Portfolio gain/loss: $ {totalProfitLoss.toFixed(2)}
      </h4>
    </div>
  );
}

export default PortfolioSummary;