import React, { useState } from 'react'
import HostNav from '../../components/homehost-page/SwichHost/HostNav';
import { useAuth } from '@clerk/clerk-react';
import useAccomStore from '../../accomStore/addaccomStore';
import AccomStep1Update from '../../components/homehost-page/UpdateAccom/AccomStep1Update';
import AccomStep2Update from '../../components/homehost-page/UpdateAccom/AccomStep2Update';
import AccomStep3Update from '../../components/homehost-page/UpdateAccom/AccomStep3Update';
import { addAccommodation } from '../../api/accomApi';

function UpdateAccom() {
    const { formData, setFormData } = useAccomStore();
    const { getToken } = useAuth();
    
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getToken()

    const amenity = formData.selectedAmenities;

    const roomData = [
        {id: 1, name: "Rooms", img: formData.img},
        {id: 2, name: "Bed Room", img: formData.imgBeds},
        {id: 3, name: "Bath Room", img: formData.imgBath}
    ];

    const accomInfrom = {
      title: formData.title,
      description: formData.description,
      pricePerNight: formData.pricePerNight,
      availQTY: formData.availQTY,
      addressDetail: formData.addressDetail,
      city: formData.city,
      country: formData.country,
      maxGuests: formData.maxGuests,
      numBedrooms: formData.numBedrooms,
      numBathrooms: formData.numBathrooms,
      latitude: formData.latitude,
      longitude: formData.longitude,
      accomCateID: formData.categoryAccom,
      typeOfAccom: formData.typeOfAccom,
    };
    if (
      !formData.title ||
      !formData.description ||
      !formData.typeOfAccom ||
      formData.img.length === 0
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    try {
      const response = await addAccommodation(token,{
        accomInfrom,
        amenity,
        roomData,
      });
      if (response.status === 200) {
        alert("Accommodation added successfully");
        setFormData(formData); // Reset form
      }
    } catch (err) {
      console.error("Error adding accommodation:", err);
    }
  };
  return (
    <div className="h-full w-full flex flex-col  gap-2 p-5 mb-20">
    {/* Nav */}
    <div>
      <HostNav />
    </div>
    {/* content */}
    <div className="flex  flex-col items-center">
      <div className="account font-bold text-4xl ml-8 mt-10 mb-8">
      Listing editor
      </div>

      {/* Timeline Progress */}
      <ul className="flex justify-center w-3/4 my-4 steps steps-horizontal">
        <li
          className={`w-[200px]  text-center text-xl  step ${
            step >= 1
              ? "font-bold step step-secondary size-20"
              : "text-gray-400  step-neutral"
          }`}
        >
          Step 1
        </li>
        <li
          className={`w-[200px]  text-center text-xl  step ${
            step >= 2
              ? "font-bold step step-secondary size-20"
              : "text-gray-400  "
          }`}
        >
          Step 2
        </li>
        <li
          className={`w-[200px] text-center text-xl  step ${
            step >= 3
              ? "font-bold step step-secondary size-20"
              : "text-gray-400 "
          }`}
        >
          Step 3
        </li>
      </ul>

      {/* Render Step Components */}
      {step === 1 && <AccomStep1Update />}
      {step === 2 && <AccomStep2Update />}
      {step === 3 && <AccomStep3Update/>}

      {/* Navigation Buttons */}
      <div className="flex mt-9 gap-2 w-[90%] justify-around">
        {step > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Back
          </button>
        )}
        {step < totalSteps ? (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-[#222222] text-white rounded hover:bg-[#333333]"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#FF385C] text-white rounded hover:bg-[#dd1062]"
          >
            Save
          </button>
        )}
      </div>
    </div>
  </div>
);
}

export default UpdateAccom