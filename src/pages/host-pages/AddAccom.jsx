import React, { useState } from "react";
import HostNav from "../../components/homehost-page/SwichHost/HostNav";
import axios from "axios";
import AccomStep1 from "../../components/homehost-page/AddAccom/AccomStep1";
import AccomStep2 from "../../components/homehost-page/AddAccom/AccomStep2";
import AccomStep3 from "../../components/homehost-page/AddAccom/AccomStep3";
import { addAccommodation } from "../../api/accomApi";
import useAccomStore from "../../accomStore/addaccomStore";
import { useAuth } from "@clerk/clerk-react";

function AddAccom() {
  const { formData, setFormData } = useAccomStore();
    const { getToken } = useAuth();
    

  // const handleChange = (e) => {
  //       const { name, value } = e.target;
  //       setFormData({ ...formData, [name]: value });
  //   };

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
          Create Your House
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
        {step === 1 && <AccomStep1 />}
        {step === 2 && <AccomStep2 />}
        {step === 3 && <AccomStep3 />}

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
              Create
            </button>
          )}
        </div>

        {/* <form className=' mt-4' onSubmit={handleSubmit}> */}

        {/* submit
            <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                <button type='submit' className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#FF385C] hover:text-black hover:duration-300'>Save</button>
            </div> */}
        {/* </form> */}
      </div>
    </div>
  );
}

export default AddAccom;
