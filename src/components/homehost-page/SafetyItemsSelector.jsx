import React from "react";

const safetyItems = ["Smoke alarm", "First aid kit", "Fire extinguisher"];

const SafetyItemsSelector = ({ selectedSafetyItems, setSelectedSafetyItems }) => {
  const toggleItem = (item) => {
    setSelectedSafetyItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Do you have any of these safety items?</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {safetyItems.map((item) => (
          <button
            key={item}
            className={`border p-4 rounded-lg ${
              selectedSafetyItems.includes(item) ? "bg-gray-200" : ""
            }`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SafetyItemsSelector;
