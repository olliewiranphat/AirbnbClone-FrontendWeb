import React from "react";
import useAccomStore from "../../../accomStore/addaccomStore";
import { AirVent, CookingPot,TvMinimalPlay, WashingMachine, Wifi } from "lucide-react";

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
    // console.log("88888888", updatedAmenities);

    setFormData({ selectedAmenities: updatedAmenities });
  };

  return (
    <div>
      <h2 className="text-xl font-bold"><span className="text-red-700 mr-1">*</span>
        Tell guests what your place has to offer
      </h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {amenities.map((amenity) => (
          <button
            key={amenity.amenityID}
            className={`border p-4 rounded-lg ${
              selectedAmenities.includes(amenity) ? "bg-[#FF385C] text-white" : ""
            }`}
            onClick={() => toggleAmenity(amenity)}
          >
             {amenity.name === "Wifi" ? <div className="flex flex-col items-center gap-2"><Wifi />Wifi</div> :
              amenity.name === "TV" ? <div className="flex flex-col items-center gap-2"><TvMinimalPlay />TV</div> :
              amenity.name === "Kitchen" ? <div className="flex flex-col items-center gap-2"><CookingPot />Kitchen</div> :
              amenity.name === "Washer" ? <div className="flex flex-col items-center gap-2"><WashingMachine />Washer</div> :
              amenity.name === "Air conditioning" ? <div className="flex flex-col items-center gap-2"><AirVent />Air conditioning</div> :
              amenity.name }
          </button>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSelector;
