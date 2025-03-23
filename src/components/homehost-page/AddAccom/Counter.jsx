import React, { useState } from 'react';
import useAccomStore from '../../../accomStore/addaccomStore';

function Counter({ field }) {
  const { formData, formDataByField } = useAccomStore();
  const count = formData[field] || 1; // Default 1 
  const [isDecrementClicked, setIsDecrementClicked] = useState(false);
  const [isIncrementClicked, setIsIncrementClicked] = useState(false);

  const increment = () => {
    formDataByField(count + 1, field);
    setIsIncrementClicked(true);
    setTimeout(() => {
      setIsIncrementClicked(false);
    }, 200);
  };

  const decrement = () => {
    if (count > 1) {
      formDataByField(count - 1, field);
      setIsDecrementClicked(true);
      setTimeout(() => {
        setIsDecrementClicked(false);
      }, 200);
    }
  };
  

  return (
    <div className="flex items-center space-x-4 p-4">
      <button 
        className={`py-2 px-4 rounded-4xl font-bold ${
          isDecrementClicked
            ? "bg-[#FF385C] text-white" // Color when clicked
            : "bg-white text-gray-800 " 
        }`}
        onClick={decrement}
      >
        -
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        className={`py-2 px-4 rounded-4xl font-bold ${
          isIncrementClicked
            ? "bg-[#FF385C] text-white" // Color when clicked
            : "bg-white text-gray-800 " 
        }`}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;