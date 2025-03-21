import React from "react";
import { Home } from "lucide-react";

const placeTypes = [
  { label: "ENTIREHOME", icon: Home },
  { label: "PRIVATEROOM", icon: Home },
  { label: "SHAREDROOM", icon: Home },
];
const PlaceTypeSelector = ({ selectedType, setSelectedType }) => {
    // เลือกได้1ประเภทเท่านั้น
    const handleSelection = (type) => {
      setSelectedType(type);
    };
    // เลือกได้หลายประเภท
// const PlaceTypeSelector = ({ selectedTypes, setSelectedTypes }) => {
//   const toggleType = (type) => {
//     setSelectedTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

  return (
    <div>
      <h2 className="text-xl font-bold"> <span className="text-red-700 mr-1">*</span>What type of place will guests have?</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {placeTypes.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`border p-4 rounded-lg flex flex-col items-center ${
              selectedType === label ? "bg-gray-200" : ""
            }`}
            onClick={() => handleSelection(label)}
          >
            <Icon className="w-6 h-6" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      {/* เลือกได้หลายประเภท */}
      {/* <div className="grid grid-cols-3 gap-4 mt-4">
        {placeTypes.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`border p-4 rounded-lg flex flex-col items-center ${
              selectedTypes.includes(label) ? "bg-gray-200" : ""
            }`}
            onClick={() => toggleType(label)}
          >
            <Icon className="w-6 h-6" />
            <span>{label}</span>
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default PlaceTypeSelector;
