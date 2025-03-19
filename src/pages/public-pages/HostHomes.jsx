import React, { useState } from 'react'
import SwichHostNav from '../../components/homehost-page/SwichHostNav'
import Footer from '../../components/Footer';
import ContentStayit from '../../components/homehost-page/contentStayit';
import MapComponent from '../../components/homehost-page/MapComponent';


function HostHomes() {
    const [value, setValue] = useState(7); 


    const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-6">
            {/* navbar */}
            <div className="w-full fixed top-0 left-0 right-0 bg-white  z-50">
               <SwichHostNav/>
            </div>
            {/* text+map */}
            <div className='px-auto flex flex-1 items-center w-full  h-full gap-4 p-2 mt-28 mb-28'>
                <div className='flex  h-[400px] w-full justify-center flex-col text-center items-center bg-white p-4'>
                    
                    <h1 className='text-5xl font-bold text-[#2222222] pb-2'>Your home could</h1>
                    <h1 className='text-5xl font-bold pb-2'> make ฿ {value*1500} on </h1>
                    <div><span className='text-5xl font-bold text-[#2222222] pb-2'>on</span> <span className='text-5xl font-bold text-[#FF385C] pb-2'>Stayzy. </span></div>
                    <h1 className='text-md mb-2 mt-2'>{value} night at an estimated ฿1,500 a night</h1>
                    <input type="range" min={1} max="30" value={value} className="range" onChange={handleChange} />
                    {/* <p className="mt-4">Value: {value}</p> */}

                    </div>
                <div className='flex border rounded-2xl h-[400px] mt-4 w-full shadow-2xl object-cover overflow-hidden'> <MapComponent/></div>
            </div>
            {/* contain */}
            <div><ContentStayit/></div>
            {/* footer */}
            <div><Footer/></div>
        </div>
    )
}

export default HostHomes