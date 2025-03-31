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

const AmenitiesSelectorUpdate = () => {
  // const selectedAmenities = useAccomStore(
  //   (state) => state.formData.selectedAmenities
  // );
  const selectAccomEdit = useAccomStore((state) => state.selectAccomEdit);
  const setHandleChangeEdit = useAccomStore((state) => state.setHandleChangeEdit);
  // console.log('selectAccomEdit555555', selectAccomEdit)
  // console.log("selectedAmenities", selectedAmenities);

  // const toggleAmenity = (amenity) => {
  //   const updatedAmenities = selectedAmenities.includes(amenity)
  //     ? selectedAmenities.filter((a) => a !== amenity)
  //     : [...selectedAmenities, amenity];
  //   // console.log("88888888", updatedAmenities);

  //   setFormData({ selectedAmenities: updatedAmenities });
  // };

// const se = selectAccomEdit.AccomAmen.filter((a) => a.amenity.amenityID === 2)
// const asd = se[0].amenity.amenityID ===2
// console.log('asd', asd)
// const zzz =se.includes( (a) => a.amenity === 2)
// console.log('zzz', zzz)
const hdlamenities = (amenity, amenityID)=>{
  const newArray = [...selectAccomEdit.AccomAmen]
  if(newArray.some((a) => a.amenity.amenityID === amenityID)){
    const index = newArray.findIndex((a) => a.amenity.amenityID === amenityID)
    newArray.splice(index, 1)
    setHandleChangeEdit("AccomAmen", newArray)
  } else {
    setHandleChangeEdit("AccomAmen", [...selectAccomEdit.AccomAmen, {amenity: {amenityID: amenityID, name: amenity}, accommodationID: selectAccomEdit.accommodationID}])
  }
}
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
              selectAccomEdit.AccomAmen.filter((a) => a.amenity.amenityID === amenity.amenityID).some((a) =>a.amenity.amenityID === amenity.amenityID) ? "bg-[#FF385C] text-white" : ""
            }`}
            onClick={() => hdlamenities(amenity.name, amenity.amenityID)}
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

export default AmenitiesSelectorUpdate;
