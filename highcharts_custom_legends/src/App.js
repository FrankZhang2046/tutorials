import React from 'react';
import './App.css';
import StackedBarChart from "./components/StackedBarChart";

function App() {
  return (
    <div className="App">
      <StackedBarChart />
      <div className='legendArea'></div>
    </div>
  );
}

export default App;
