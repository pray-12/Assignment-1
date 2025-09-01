import React, { useState } from 'react';

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  return (
    <div className="counter-container">
      <h2 className="component-heading">Functional Component</h2>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button
          className="counter-btn decrement-btn"
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>
        <button
          className="counter-btn increment-btn"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FunctionalCounter;
