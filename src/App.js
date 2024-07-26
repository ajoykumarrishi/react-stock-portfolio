import React from 'react';
import AddStockForm from './components/add-stock-form';

const App = () => {
  return (
    <div>
      <h1>Stock Portfolio</h1>
      <p>Under Construction</p>
      <AddStockForm addStock={(output) => console.log(output)} />
    </div>
  )
};

export default App;