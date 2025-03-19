import React, { useState } from 'react'
import Counter from './Counter';
import MapComponent from './MapComponent';

function AccomStep3() {
    const initInput = {
        title: "",
        description: "",
        typeOfAccom: "",
        img:[],
        availQTY: "",
        numBedrooms: "",
        numBathrooms: "",
        maxGuests: "",
        pricePerNight: "",
        addressDetail: "",
        city: "",
        country: "",
        latitude: "",
        longitude: "",
      };
    const [formData, setFormData] = useState(initInput);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <div>
    {/* address */}
    <div className='flex flex-col gap-2 mt-2 '>
        <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Address of the accommodation</span>
        <input type="text" name='address' defaultValue={formData.addressDetail} onChange={handleChange} placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                    
        <div className='flex  gap-4 mb-2'>
            <div className='flex flex-col gap-2 '>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>City</span>
            <input type="text" name='city' defaultValue={formData.city} onChange={handleChange} placeholder='What is City?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
            </div>
        <div className='flex flex-col gap-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Country</span>
            <input type="text" name='country' defaultValue={formData.country} onChange={handleChange} placeholder='What is Country?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
        {/* <Counter/> */}
        </div>
    </div>
    {/* แผนที่ */}
    <div className='flex flex-col gap-2 mt-4 mb-8'>
        <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Please provide a map location of the accommodation.</span>
        <div className='flex border rounded-2xl h-[400px] mt-4 w-full hover:shadow-xl object-cover overflow-hidden'> <MapComponent/></div>
    </div>
    <div className='flex gap-4 mb-2'>
        <div className='flex flex-col gap-2 mt-4'>
        <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Latitude</span>
        <input type="text" name='latitude' defaultValue={formData.latitude} onChange={handleChange} placeholder='What is Latitude?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
    </div>
    
    <div className='flex flex-col gap-2 mt-4'>
        <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Longtitude</span>
        <input type="text" name='longtitude' defaultValue={formData.longitude} onChange={handleChange} placeholder='What is Longtitude?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
    </div>
    </div>
  )
}

export default AccomStep3