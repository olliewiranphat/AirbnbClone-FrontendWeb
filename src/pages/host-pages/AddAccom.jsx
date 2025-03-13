import React, { useRef, useState } from 'react'
import HostNav from '../../components/homehost-page/HostNav'

function AddAccom() {
    const usePencil = useRef()
    // const hdlAddImage = async (e) => {
    //     const token = await getToken()
    //     setLoading(!loading)
    //     const files = e.target.files
    //     console.log('files', files);
    //     let allImages = []
    //     for (let i = 0; i < files.length; i++) {
    //         await resizeFile(files[i]).then(async (resizedImage) => {
    //             const response = await addPDImgsCloud(token, resizedImage)
    //             console.log('response >>>>>', response);

    //             setLoading(false)
    //             allImages.push(response.data.results)
    //         })
    //     }
    //     setImageData([...imageData, ...allImages])
    //     setShowImage(true)
    // }
    // console.log('imageData', imageData);
  return (
    <div className='h-full w-full flex flex-col  items-center  gap-2 p-5 mb-20'>
         {/* Nav */}
         <div><HostNav/></div>
         {/* content */}
        <div className='account font-bold text-2xl ml-8'>Create Your House</div>
            <form className=' mt-4' >
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Accommodation Name</span>
                    <input type="text" placeholder='What is the name of your accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2 " />
                </div>
                
                <div className='flex flex-col gap-2 mt-2 mb-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Description</span>
                    <textarea  placeholder='Please describe the details of your accommodation.'
                    className="textarea textarea-bordered border-[#a4a5a5] textarea-xs w-full "></textarea>
                </div>

                {/* type room */}
                <div className='flex flex-col gap-2 mt-2'>
                <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Type of Accommodation</span>
                <select className="select select-bordered border-[#a4a5a5] w-full textarea-xs ">
                    <option disabled selected >What type of Accommodation are available?</option>
                    <option>ENTIREHOME</option>
                    <option>PRIVATEROOM</option>
                    <option>SHAREDROOM</option>
                </select>
                {/* upload photos of the accommodation */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Upload photos of the accommodation.</span>
                    <input type="file"
                    className="file-input file-input-bordered border-[#a4a5a5] file-input-secondary w-full mb-2" />
                </div>

                </div>
                {/* จำนวน max กี่ห้อง */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many rooms are available for rent?</span>
                    <input type="text" placeholder='How many rooms are available for rent?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bedrooms are there?</span>
                    <input type="text" placeholder='How many bedrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>How many bathrooms are there?</span>
                    <input type="text" placeholder='How many bathrooms are there?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* จำนวนคนเข้าพัก */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>What is the maximum number of guests allowed?</span>
                    <input type="text" placeholder='Maximum number of guests' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* price */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Price per night (฿)</span>
                    <input type="text" placeholder='What is the price per night?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                {/* address */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Address of the accommodation</span>
                    <input type="text" placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                    <div className='flex gap-4 mb-2'>
                        <div>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>City</span>
                    <input type="text" placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                        <div>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Country</span>
                    <input type="text" placeholder='What is the address of the accommodation?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                    </div>

                </div>
                {/* แผนที่ */}
                <div className='flex flex-col gap-2 mt-2'>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Please provide a map location of the accommodation.</span>
                    <input type="text" placeholder='Please provide a map location of the accommodation.' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                </div>
                <div className='flex gap-4 mb-2'>
                        <div>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Latitude</span>
                    <input type="text" placeholder='What is Latitude?' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                        <div>
                    <span className='text-xs'><span className='text-red-700 mr-1'>*</span>Longtitude</span>
                    <input type="text" placeholder='What is Longtitude' className="input input-bordered border-[#a4a5a5] w-full textarea-xs mb-2" />
                        </div>
                    </div>
                {/* submit */}
                <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                    <button className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                </div>
            </form>
        </div>
  );
}

export default AddAccom;
