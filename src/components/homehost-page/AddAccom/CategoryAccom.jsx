import React, { useEffect, useState } from "react";
import useAdminStore from "../../../store/useAdminStore";
import { useAuth } from "@clerk/clerk-react";

const categoryAccom1 = ["Amazing views", "Beachfront", "OMG!", "Rooms", "Treehouses","Castles","Farms","Cabins","Tiny homes","Amazing pools"];

const CategoryAccom = ({ selectedAccom, setSelectedAccom }) => {
  const {getToken} = useAuth()
  const getAllAccomocate = useAdminStore(state => state.actionGetListAccomocate)
   const [allAccomocate, setAllAccomocate] = useState([])

  //  console.log('getAllAccomocate', getAllAccomocate)
  const handleSelection = (type) => {
    console.log('type----', type)
    setSelectedAccom(type);
  };

   const fetchAllAccomocate = async () => {
          try {
              const Token = await getToken()
              const res = await getAllAccomocate(Token)
              setAllAccomocate(res)
              // console.log('res', res)
          } catch (error) {
              console.log('error', error)
          }
      }
  
      console.log('allAccomocate', allAccomocate)
  
      useEffect(() => {
          fetchAllAccomocate()
      }, [])


  //   console.log('categoryAccom', categoryAccom)
  //   const setFormData = useAccomStore((state) => state.setFormData);
  // const toggleItem = (categoryacc) => {
  //   const updatedCategories = categoryAccom.includes(categoryacc)
  //     ? categoryAccom.filter((item) => item !== categoryacc)
  //     : [...categoryAccom, categoryacc];
  //     console.log('updatedCategories', updatedCategories)

  //   setFormData({ categoryAccom: updatedCategories });
  // };

//   const toggleItem = (categoryacc) => {
//     setSelectedAccom((prev) =>
//       prev.includes(categoryacc) ? prev.filter((a) => a !== categoryacc) : [...prev, categoryacc]
//     );
//   };

  return (
    <div>
      <h2 className="text-xl font-bold"><span className="text-red-700 mr-1">*</span>Which of these best describes your place?</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {allAccomocate.map((categoryacc) => (
      
          
          <button
            key={categoryacc.accomCateID}
            className={`border p-4 rounded-lg cursor-pointer hover:bg-[#e8e8e8] flex items-center justify-center
             ${selectedAccom === categoryacc.accomCateID ? "bg-[#FF385C] text-white" : "bg-white text-black"
             }`}
            onClick={() => handleSelection(categoryacc.accomCateID)}
          >
            {categoryacc.cateName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryAccom;