import React, { useState } from 'react'
import SwichHostNav from '../../components/homehost-page/SwichHostNav'
import Footer from '../../components/Footer';
import ContentStayit from '../../components/homehost-page/contentStayit';
import MapComponent from '../../components/map/MapComponent';

function HostHomes() {
    const [value, setValue] = useState(40);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            {/* ✅ แก้ div ที่ซ้ำกัน */}
            <div className="fixed top-0 left-0 right-0 bg-white z-50">
                <SwichHostNav />
            </div>

            <div className='flex flex-col gap-16 mt-[10%]'>
                {/* ✅ ปรับ Layout ให้แสดงแนวนอนเมื่อหน้าจอกว้าง */}
                <div className="w-[90%] h-auto md:h-[600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ✅ CONTENT */}
                    <div className="flex flex-col justify-center items-center text-center bg-white p-4">
                        <h1 className="text-4xl font-bold text-[#FF385C] pb-2">Stayzy it. </h1>
                        <h1 className="text-3xl font-bold text-[#222222] pb-2">You could learn</h1>
                        <h1 className="text-5xl font-bold pb-2">฿ 20,000</h1>
                        <h1 className="text-sm mb-2">7 night at an estimated ฿2,500 a night</h1>
                        <input type="range" min={0} max="100" value={value} className="range" onChange={handleChange} />
                    </div>

                    {/* ✅ MAP ขยายเต็มพื้นที่ */}
                    <div className="w-full h-full flex items-center justify-center">
                        <MapComponent />
                    </div>
                </div>

                {/* ✅ CONTENT ข้อมูลเพิ่มเติม */}
                <ContentStayit />

                {/* ✅ FOOTER */}
                <Footer />
            </div>
        </>
    );
}

export default HostHomes;
