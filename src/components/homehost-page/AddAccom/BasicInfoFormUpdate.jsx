import React from "react";
import Counter from "./Counter";
import useAccomStore from "../../../accomStore/addaccomStore";
import CounterUpdate from "./CounterUpdate";

const BasicInfoFormUpdate = () => {
    const { formData, formDataByFIeld, selectAccomEdit } = useAccomStore();
    const updateField = (value,field ) => {
        formDataByFIeld( value,field);
    };
    const fields = [
        { field: "availQTY", label: "Available Rooms" },
        { field: "NumBedrooms", label: "Number of Bedrooms" },
        { field: "NumBathrooms", label: "Number of Bathrooms" },
        { field: "MaxGuests", label: "Maximum Guests" },
      ];
  return (
    <div>
      <h2 className="text-xl font-bold"><span className="text-red-700 mr-1">*</span>Share some basics about your place</h2>
      {fields.map((field,index) => (
        <div key={index} className="flex justify-between items-center mt-2">
          <span className="capitalize">{field.label}</span>
          <CounterUpdate
            //  count={selectAccomEdit[field] || formData[field] || 1}
            // setCount={(value) => updateField(value,field )}
            field={field.field}
          />
        </div>
      ))}
    </div>
  );
};

export default BasicInfoFormUpdate;