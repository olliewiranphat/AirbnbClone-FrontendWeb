import React from "react";
import useAccomStore from "../../../accomStore/addaccomStore";

const categoryAccom1 = ["Amazing views", "Beachfront", "OMG!", "Rooms", "Treehouses","Castles","Farms","Cabins","Tiny homes","Amazing pools"];

const CategoryAccom = ({ selectedAccom, setSelectedAccom }) => {
    const categoryAccom = useAccomStore((state) => state.formData.categoryAccom);
    console.log('categoryAccom', categoryAccom)
    const setFormData = useAccomStore((state) => state.setFormData);
  const toggleItem = (categoryacc) => {
    const updatedCategories = categoryAccom.includes(categoryacc)
      ? categoryAccom.filter((item) => item !== categoryacc)
      : [...categoryAccom, categoryacc];
      console.log('updatedCategories', updatedCategories)

    setFormData({ categoryAccom: updatedCategories });
  };

//   const toggleItem = (categoryacc) => {
//     setSelectedAccom((prev) =>
//       prev.includes(categoryacc) ? prev.filter((a) => a !== categoryacc) : [...prev, categoryacc]
//     );
//   };

  return (
    <div>
      <h2 className="text-xl font-bold"><span className="text-red-700 mr-1">*</span>Which of these best describes your place?</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {categoryAccom1.map((categoryacc) => (
          <button
            key={categoryacc}
            className={`border p-4 rounded-lg ${
                categoryAccom.includes(categoryacc) ? "bg-[#FF385C] text-white" : ""
            }`}
            onClick={() => toggleItem(categoryacc)}
          >
            {categoryacc}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryAccom;