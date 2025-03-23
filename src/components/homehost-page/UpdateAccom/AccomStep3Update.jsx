import React, { useState } from 'react'
import MapComponent from '../../homehost-page/AddAccom/MapComponent';
import useAccomStore from '../../../accomStore/addaccomStore';

function AccomStep3Update() {
    const {formData, setFormData} = useAccomStore();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <div className='flex  gap-12 mt-4 w-[60%] mx-auto space-y-6 h-[100%] bg-pink-50 border-none p-8 rounded-2xl shadow-xl'>
        <div className='flex flex-col gap-2 w-[50%]  mt-4 mb-8'>
            <h1 className='text-2xl font-bold'>Where is your place located?</h1>
            <span className='text-md'><span className='text-red-700 mr-1'>*</span>Please provide a map location of the accommodation.</span>
            <div className='flex border rounded-2xl h-[400px] mt-4 w-full hover:shadow-xl object-cover overflow-hidden'> <MapComponent/></div>
        </div>

    {/* address */}
    <div className='flex flex-col justify-center gap-2 mt-4 w-[50%] '>
        <span className='text-lg font-bold'><span className='text-red-700 mr-1'>*</span>Address </span>
        <input type="text" name='addressDetail' value={formData.addressDetail || ""} onChange={handleChange} placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] max-w-full rounded-2xl textarea-sm mb-2 " />
                    
        <div className='flex  gap-4 mb-2'>
            <div className='flex flex-col gap-2 '>
            <span className='text-lg font-bold'><span className='text-red-700 mr-1'>*</span>City</span>
            <input type="text" name='city' value={formData.city} onChange={handleChange} placeholder='What is City?' className="input input-bordered border-[#a4a5a5] w-full rounded-2xl textarea-sm mb-2" />
            </div>
        <div className='flex flex-col gap-2'>
            <span className='text-lg font-bold'><span className='text-red-700 mr-1'>*</span>Country</span>
            <input type="text" name='country' value={formData.country} onChange={handleChange} placeholder='What is Country?' className="input input-bordered border-[#a4a5a5] w-full rounded-2xl textarea-sm mb-2" />
        </div>
        </div>

    {/* แผนที่ */}
    <div className='flex gap-4 mb-2'>
        <div className='flex flex-col gap-2 mt-4'>
        <span className='text-lg font-bold'><span className='text-red-700 mr-1'>*</span>Latitude</span>
        <input type="text" name='latitude'  value={formData.latitude || ""} onChange={handleChange} placeholder='What is Latitude?' className="input input-bordered border-[#a4a5a5] w-full rounded-2xl textarea-sm mb-2" />
    </div>
    
    <div className='flex flex-col gap-2 mt-4'>
        <span className='text-lg font-bold'><span className='text-red-700 mr-1'>*</span>Longtitude</span>
        <input type="text" name='longitude' value={formData.longitude || ""} onChange={handleChange} placeholder='What is Longtitude?' className="input input-bordered border-[#a4a5a5] w-full rounded-2xl textarea-sm mb-2" />
        </div>
    </div>
    </div>
    </div>
  )
}

export default AccomStep3Update