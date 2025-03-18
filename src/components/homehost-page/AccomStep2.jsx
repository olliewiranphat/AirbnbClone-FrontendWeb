import React, { useState } from 'react'

function AccomStep2() {
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
        {/* จำนวน max กี่ห้อง */}
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many rooms are available for rent?</span>
            <input type="text" name='quantityrooms' defaultValue={formData.availQTY} onChange={handleChange}  placeholder='How many rooms are available for rent?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bedrooms are there?</span>
            <input type="text" name='quantitybeds' defaultValue={formData.numBedrooms} onChange={handleChange} placeholder='How many bedrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bathrooms are there?</span>
            <input type="text" name='quantitybathrooms' defaultValue={formData.numBathrooms} onChange={handleChange} placeholder='How many bathrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
        {/* จำนวนคนเข้าพัก */}
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>What is the maximum number of guests allowed?</span>
            <input type="text" name='guests' defaultValue={formData.maxGuests} onChange={handleChange} placeholder='Maximum number of guests' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
         {/* price */}
        <div className='flex flex-col gap-2 mt-2'>
            <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Price per night (฿)</span>
            <input type="text" name='price' defaultValue={formData.pricePerNight} onChange={handleChange} placeholder='What is the price per night?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
        </div>
    </div>
  )
}

export default AccomStep2