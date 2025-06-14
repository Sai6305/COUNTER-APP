import React, { useState } from 'react';
import './App.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h1 className="counter-title">React Counter</h1>
        <p className="count-display">{count}</p>
        <div className="btn-group">
          <button className="btn decrement" onClick={() => setCount(count - 1)}>-</button>
          <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
          <button className="btn increment" onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
