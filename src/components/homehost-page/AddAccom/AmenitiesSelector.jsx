import React from "react";
import useAccomStore from "../../../accomStore/addaccomStore";

const amenities = [
  { amenityID: 1, name: "Wifi" },
  { amenityID: 2, name: "TV" },
  { amenityID: 3, name: "Kitchen" },
  { amenityID: 4, name: "Washer" },
  { amenityID: 5, name: "Air conditioning" },
];

const AmenitiesSelector = () => {
  const selectedAmenities = useAccomStore(
    (state) => state.formData.selectedAmenities
  );
  console.log("selectedAmenities", selectedAmenities);
  const setFormData = useAccomStore((state) => state.setFormData);
  const toggleAmenity = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    console.log("88888888", updatedAmenities);

    setFormData({ selectedAmenities: updatedAmenities });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">
        Tell guests what your place has to offer
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {amenities.map((amenity) => (
          <button
            key={amenity}
            className={`border p-4 rounded-lg ${
              selectedAmenities.includes(amenity) ? "bg-gray-200" : ""
            }`}
            onClick={() => toggleAmenity(amenity)}
          >
            {amenity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSelector;
