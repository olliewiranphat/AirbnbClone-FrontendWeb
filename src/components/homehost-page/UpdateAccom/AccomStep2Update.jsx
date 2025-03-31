import React, { useState } from 'react'
import useAccomStore from '../../../accomStore/addaccomStore';
import AmenitiesSelector from '../AddAccom/AmenitiesSelector';
import Upimg from '../AddAccom/Upimg';
import BasicInfoFormUpdate from '../AddAccom/BasicInfoFormUpdate';
import AmenitiesSelectorUpdate from '../AddAccom/AmenitiesSelectorUpdate';
import UpimgUpdate from '../AddAccom/UpimgUpdate';

function AccomStep2Update() {

    const { formData, formDataByField, selectAccomEdit, setHandleChangeEdit } = useAccomStore();
  
        const handleChange = (e) => {
            const { name, value } = e.target;
            setHandleChangeEdit(value, name);
        };
  return (
    <div className='flex flex-col gap-12 mt-4 w-[60%] h-[100%] bg-pink-50 border-none p-8 rounded-2xl shadow-xl'>
        {/* bed */}
        <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6 border-b-2" >
      <BasicInfoFormUpdate
              // selectedType={[selectAccomEdit.availQTY, selectAccomEdit.numBedrooms, selectAccomEdit.numBathrooms, selectAccomEdit.maxGuests]}
              // setSelectedType={(type) => formDataByField({ availQTY: type[0], numBedrooms: type[1], numBathrooms: type[2], maxGuests: type[3] }, 'availQTY')}
            />
      </div>
        {/* Amenities Selector */}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6">
        <AmenitiesSelectorUpdate />
      </div>
      {/* image */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Rooms</h2>
        <UpimgUpdate field='img'/>
      </div>
      {/* image BedRoom */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Beds room</h2>
        <UpimgUpdate field='imgBeds'/>
      </div>

      {/* image bathRoom */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Baths room</h2>
        <UpimgUpdate field='imgBath'/>
      </div>

         {/* price */}
        <div className='flex justify-between gap-4 mt-2 p-6 w-full space-y-6'>
            <h2 className='text-xl font-bold'><span className='text-red-700 mr-1'>*</span>Price/night(฿)</h2>
            <input type="text" name='pricePerNight' value={formData.pricePerNight} onChange={handleChange} placeholder='What is the price per night?' className="input input-bordered border-[#a4a5a5] w-3/4 rounded-xl textarea-sm mb-2" />
        </div>

    </div>
  )
}

export default AccomStep2Update