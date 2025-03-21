// MultiSelectForm.js
import React, { useState } from "react";
// import PlaceTypeSelector from "./PlaceTypeSelector";
// import BasicInfoForm from "./BasicInfoForm";
import AmenitiesSelector from "./AmenitiesSelector";
import SafetyItemsSelector from "./SafetyItemsSelector";

const MultiSelectForm = () => {
  // const [selectedTypes, setSelectedTypes] = useState(["PRIVATEROOM"]);
  // const [basicInfo, setBasicInfo] = useState({ guests: 4, bedrooms: 1, beds: 1, bathrooms: 1 });
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedSafetyItems, setSelectedSafetyItems] = useState([]);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* <PlaceTypeSelector selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} /> */}
      {/* <BasicInfoForm basicInfo={basicInfo} setBasicInfo={setBasicInfo} /> */}
      <AmenitiesSelector selectedAmenities={selectedAmenities} setSelectedAmenities={setSelectedAmenities} />
      <SafetyItemsSelector selectedSafetyItems={selectedSafetyItems} setSelectedSafetyItems={setSelectedSafetyItems} />
    </div>
  );
};

export default MultiSelectForm;