import React, { useEffect, useState } from 'react';
import HostNav from '../../components/homehost-page/SwichHost/HostNav';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

function UpdateAccom() {
    // const { id } = useParams();
    const initInput = {
            title: "",
            description: "",
            typeOfAccommodation: "",
            img:[],
            quantityrooms: "",
            quantitybeds: "",
            quantitybathrooms: "",
            guests: "",
            price: "",
            address: "",
            city: "",
            country: "",
            latitude: "",
            longitude: "",
          };
          const [formData, setFormData] = useState(initInput);
    
    useEffect(() => {
        const fetchAccommodation = async () => {
            try {
                const response = await axios.get(`http://your-backend-api-url.com/accommodation/${id}`);
                setFormData(response.data);
            } catch (err) {
                console.error('Error fetching accommodation:', err);
            }
        };
        fetchAccommodation();
    }, [id]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImagesChange = (images) => {
        setFormData({ ...formData, img: images });
    };

    const handleRemoveImage = (index) => {
        const newImages = [...formData.img];
        newImages.splice(index, 1);
        setFormData({ ...formData, img: newImages });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://your-backend-api-url.com/accommodation/${id}`, formData);
            if (response.status === 200) {
                alert('Accommodation updated successfully');
            }
        } catch (err) {
            console.error('Error updating accommodation:', err);
        }
    };
    
    if (!formData) return <div>Loading...</div>;
    
    return (
        <div className='h-full w-full flex flex-col  gap-2 p-5 mb-20'>
         {/* Nav */}
         <div><HostNav/></div>
         {/* content */}
        <div className='flex  flex-col items-center'>
        <div className='account font-bold text-2xl ml-8'>Create Your House</div>
            <form className=' mt-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Accommodation Name</span>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='What is the name of your accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2 " />
                </div>
                
                <div className='flex flex-col gap-2 mt-2 mb-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Description</span>
                    <textarea name='description' value={formData.description} onChange={handleChange} placeholder='Please describe the details of your accommodation.'
                    className="textarea textarea-bordered border-[#a4a5a5] textarea-xs w-full "></textarea>
                </div>

                {/* type room */}
                <div className='flex flex-col gap-2 mt-2'>
                <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Type of Accommodation</span>
                <select  name="typeOfAccommodation" value={formData.typeOfAccommodation} onChange={handleChange} className="select select-bordered border-[#a4a5a5] w-full textarea-xs ">
                    <option value="" disabled selected >What type of Accommodation are available?</option>
                    <option>ENTIREHOME</option>
                    <option>PRIVATEROOM</option>
                    <option>SHAREDROOM</option>
                </select>

                   {/* AccomAmenity */}
                   <div className='flex flex-col gap-2 mt-2'>
                <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Type of Amenity</span>
                <select className="select select-bordered border-[#a4a5a5] w-full textarea-xs ">
                    <option value="" disabled selected >What types of amenities are available?</option>
                    <option>Amazing views</option>
                    <option>Beachfront</option>
                    <option>OMG!</option>
                    <option>Rooms</option>
                    <option>Treehouses</option>
                    <option>Castles</option>
                    <option>Farms</option>
                    <option>Cabins</option>
                    <option>Tiny homes</option>
                    <option>Amazing pools</option>
                </select>
                </div>
                {/* upload photos of the accommodation */}
                <div className='flex flex-col gap-2 mt-2'>
                    {/* ส่วนแสดงรูป */}
                <div className='flex gap-2 mt-2 flex-wrap'>
                    {formData.img.length > 0 && formData.img.map((image, index) => (
                    <div key={index} className='relative'>
                    <img 
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)} 
                    alt={`uploaded ${index}`} 
                    className='w-30 h-30 object-cover rounded-md' />
                    <button  type="button"
                    onClick={() => handleRemoveImage(index)}
                    className='absolute top-0 right-0 text-white text-xs  rounded-full p-2'>✕</button>
                    </div>
                    ))}
                </div>
                    {/* ใส่รูป */}
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Upload photos of the accommodation.</span>
                    <input type="file" multiple 
                    onChange={(e) => handleImagesChange([...formData.img, ...e.target.files])}
                    className="file-input file-input-bordered border-[#a4a5a5] file-input-secondary w-full mb-2" />
                </div>

                </div>
                {/* จำนวน max กี่ห้อง */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many rooms are available for rent?</span>
                    <input type="text" name='quantityrooms' value={formData.quantityrooms} onChange={handleChange}  placeholder='How many rooms are available for rent?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bedrooms are there?</span>
                    <input type="text" name='quantitybeds' value={formData.quantitybeds} onChange={handleChange} placeholder='How many bedrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bathrooms are there?</span>
                    <input type="text" name='quantitybathrooms' value={formData.quantitybathrooms} onChange={handleChange} placeholder='How many bathrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* จำนวนคนเข้าพัก */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>What is the maximum number of guests allowed?</span>
                    <input type="text" name='guests' value={formData.guests} onChange={handleChange} placeholder='Maximum number of guests' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* price */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Price per night (฿)</span>
                    <input type="text" name='price' value={formData.price} onChange={handleChange} placeholder='What is the price per night?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* address */}
                <div className='flex flex-col gap-2 mt-2 '>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Address of the accommodation</span>
                    <input type="text" name='address' value={formData.address} onChange={handleChange} placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                    
                    <div className='flex  gap-4 mb-2'>
                        <div className='flex flex-col gap-2 '>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>City</span>
                    <input type="text" name='city' value={formData.city} onChange={handleChange} placeholder='What is City?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                        <div className='flex flex-col gap-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Country</span>
                    <input type="text" name='country' value={formData.country} onChange={handleChange} placeholder='What is Country?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                    </div>
                </div>

                {/* แผนที่ */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Please provide a map location of the accommodation.</span>
                    <input type="text" name='map' value={formData.map} onChange={handleChange} placeholder='Please provide a map location of the accommodation.' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex gap-4 mb-2'>
                        <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Latitude</span>
                    <input type="text" name='latitude' value={formData.latitude} onChange={handleChange} placeholder='What is Latitude?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                        <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Longtitude</span>
                    <input type="text" name='longtitude' value={formData.longitude} onChange={handleChange} placeholder='What is Longtitude?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                    </div>
                {/* submit */}
                <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                    <button type='submit' className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#FF385C] hover:text-black hover:duration-300'>Save</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default UpdateAccom;
