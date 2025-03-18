import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;