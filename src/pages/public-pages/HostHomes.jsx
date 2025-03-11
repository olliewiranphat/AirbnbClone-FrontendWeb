import React, { useState } from 'react'
import SwichHostNav from '../../components/homehost-page/SwichHostNav'
import Footer from '../../components/Footer';
import ContentStayit from '../../components/homehost-page/contentStayit';

function HostHomes() {
    const [value, setValue] = useState(40); // เริ่มต้นค่าเริ่มต้นที่ 50

    const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <div>
            {/* navbar */}
            <div >
               <SwichHostNav/>
            </div>
            {/* text+map */}
            <div className='px-[40px] flex flex-1 bg-gray-400 w-500  h-500 gap-4 p-2'>
                <div className='flex  h-[300px] w-full justify-center flex-col text-center items-center bg-white p-4'>
                    <h1 className='text-4xl font-bold text-[#FF385C] pb-2'>Stayzy it. </h1>
                    <h1 className='text-3xl font-bold text-[#2222222] pb-2'>You cloud learn</h1>
                    <h1 className='text-5xl font-bold pb-2'>฿ 20,000</h1>
                    <h1 className='text-sm mb-2'>7 night at an estimated ฿2,500 a night</h1>
                    <input type="range" min={0} max="100" value={value} className="range" onChange={handleChange} />
                    {/* <p className="mt-4">Value: {value}</p> */}

                    </div>
                <div className='flex bg-green-200 border rounded-2xl h-[300px] w-full'>Map</div>
            </div>
            {/* contain */}
            <div><ContentStayit/></div>
            {/* footer */}
            <div><Footer/></div>
        </div>
    )
}

export default HostHomes