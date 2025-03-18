import React, { useState } from 'react'
import SwichHostNav from '../../components/homehost-page/SwichHostNav'
import Footer from '../../components/Footer';
import ContentStayit from '../../components/homehost-page/contentStayit';


function HostHomes() {
    const [value, setValue] = useState(40); 


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
            <div className='px-auto flex flex-1  bg-gray-400 w-full  h-full gap-4 p-2 mt-28 mb-28'>
                <div className='flex  h-[400px] w-full justify-center flex-col text-center items-center bg-white p-4'>
                    <h1 className='text-4xl font-bold text-[#FF385C] pb-2'>Stayzy it. </h1>
                    <h1 className='text-3xl font-bold text-[#2222222] pb-2'>You cloud learn</h1>
                    <h1 className='text-5xl font-bold pb-2'>฿ {value*1500}</h1>
                    <h1 className='text-sm mb-2'>{value} night at an estimated ฿1,500 a night</h1>
                    <input type="range" min={0} max="100" value={value} className="range" onChange={handleChange} />
                    {/* <p className="mt-4">Value: {value}</p> */}

                    </div>
                <div className='flex bg-green-200 border rounded-2xl h-[400px] w-full'>Map</div>
            </div>
            {/* contain */}
            <div><ContentStayit/></div>
            {/* footer */}
            <div><Footer/></div>
        </div>
    )
}

export default HostHomes