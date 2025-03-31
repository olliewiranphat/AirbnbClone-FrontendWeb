import React, { useState } from 'react';
import useAccomStore from '../../../accomStore/addaccomStore';

function CounterUpdate({ field }) {
  const { formData, formDataByField, selectAccomEdit, setHandleChangeEdit } = useAccomStore();
  const count = selectAccomEdit[field] || formData[field] || 1; // Default 1 
  const [isDecrementClicked, setIsDecrementClicked] = useState(false);
  const [isIncrementClicked, setIsIncrementClicked] = useState(false);

  const increment = () => {
    // formDataByField(count + 1, field);
    setIsIncrementClicked(true);
    setHandleChangeEdit(field, count + 1)
    setTimeout(() => {
      setIsIncrementClicked(false);
    }, 200);
  };

  const decrement = () => {
    if (count > 1) {
      setHandleChangeEdit(field, count - 1)
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

export default CounterUpdate;