import React, { useState } from 'react'
import useAccomStore from '../../../accomStore/addaccomStore';
import BasicInfoForm from '../AddAccom/BasicInfoForm';
import AmenitiesSelector from '../AddAccom/AmenitiesSelector';
import Upimg from '../AddAccom/Upimg';

function AccomStep2() {
    const { formData, formDataByField } = useAccomStore();
    console.log('formDataByFIeId', formDataByField)
        const handleChange = (e) => {
            const { name, value } = e.target;
            formDataByField(value, name);
        };
  return (
    <div className='flex flex-col gap-12 mt-4 w-[60%] h-[100%] bg-pink-50 border-none p-8 rounded-2xl shadow-xl'>
        {/* bed */}
        <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6 border-b-2" >
      <BasicInfoForm
              selectedType={[formData.availQTY, formData.numBedrooms, formData.numBathrooms, formData.maxGuests]}
              setSelectedType={(type) => formDataByField({ availQTY: type[0], numBedrooms: type[1], numBathrooms: type[2], maxGuests: type[3] }, 'availQTY')}
            />
      </div>
        {/* Amenities Selector */}
      <div className="flex flex-col gap-2 p-6 mx-auto w-full space-y-6">
        <AmenitiesSelector />
      </div>
      {/* image */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Main room</h2>
        <Upimg field='img'/>
      </div>
      {/* image BedRoom */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Beds room</h2>
        <Upimg field='imgBeds'/>
      </div>

      {/* image bathRoom */}
      <div className='bg-gray-100 p-2 rounded-2xl text-xl font-bold'>
        <h2>Baths room</h2>
        <Upimg field='imgBath'/>
      </div>

        {/* จำนวน max กี่ห้อง */}
        {/* <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many rooms are available for rent?</span>
            <input type="text" name='quantityrooms' defaultValue={formData.availQTY} onChange={handleChange}  placeholder='How many rooms are available for rent?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>

         {/* price */}
        <div className='flex justify-between gap-4 mt-2 p-6 w-full space-y-6'>
            <h2 className='text-xl font-bold'><span className='text-red-700 mr-1'>*</span>Price/night(฿)</h2>
            <input type="text" name='pricePerNight' value={formData.pricePerNight} onChange={handleChange} placeholder='What is the price per night?' className="input input-bordered border-[#a4a5a5] w-3/4 rounded-xl textarea-sm mb-2" />
        </div>
    </div>
  )
}

export default AccomStep2