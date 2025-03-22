import React, { useState } from 'react';
import useAccomStore from '../../accomStore/addaccomStore';

function Counter({ field }) {
  const { formData, formDataByField } = useAccomStore();
  const count = formData[field] || 1; // Default 1 

  const increment = () => {
    formDataByField(count + 1, field);
  };

  const decrement = () => {
    if (count > 1) {
      formDataByField(count - 1, field);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-4xl"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-lg font-semibold">{count}</span>
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-4xl"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
}

export default Counter;