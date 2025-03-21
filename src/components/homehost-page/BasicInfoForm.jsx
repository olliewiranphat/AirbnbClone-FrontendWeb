import React from "react";
import Counter from "./Counter";
import useAccomStore from "../../accomStore/addaccomStore";

const BasicInfoForm = () => {
    const { formData, formDataByFIeld } = useAccomStore();
    const updateField = (field, value) => {
        formDataByFIeld( value,field);
    };
    const fields = [
        { field: "availQTY", label: "Available Rooms" },
        { field: "numBedrooms", label: "Number of Bedrooms" },
        { field: "numBathrooms", label: "Number of Bathrooms" },
        { field: "maxGuests", label: "Maximum Guests" },
      ];
  return (
    <div>
      <h2 className="text-xl font-bold">Share some basics about your place</h2>
      {fields.map((field) => (
        <div key={field} className="flex justify-between items-center mt-2">
          <span className="capitalize">{field.label}</span>
          <Counter
             count={formData[field] || 1}
            setCount={(value) => updateField(field, value)}
            field={field.field}
          />
        </div>
      ))}
    </div>
  );
};

export default BasicInfoForm;