import React from 'react';

function AccomITEM({ image, location, rating, stayDetails, dateRange, price }) {
    return (
        <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md"> {/* เพิ่ม shadow และ rounded */}
            {/* รูปภาพ */}
            <div className="relative">
                <img 
                    src={image} 
                    alt={location} 
                    className="rounded-2xl bg-gray-300 w-full h-[290px] object-cover" 
                />
                {/* Badge "Guest favourite" */}
                <span className="absolute top-2 left-2 bg-white text-black text-[12px] px-2 py-1 rounded-md font-medium">
                    Guest favourite
                </span>
                {/* Icon หัวใจ */}
                <span className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer">
                    ❤️
                </span>
            </div>

            {/* ชื่อสถานที่ */}
            <span className="text-[16px] font-semibold">{location}</span>
            
            {/* คะแนนรีวิว */}
            <span className="text-[14px] text-[#6a6a6a]">⭐ {rating}</span>
            
            {/* รายละเอียดการเข้าพัก */}
            <span className="text-[14px] text-[#6a6a6a]'">{stayDetails}</span>
            
            {/* ช่วงวันที่ */}
            <span className="text-[14px] text-[#6a6a6a]'">{dateRange}</span>
            
            {/* ราคา */}
            <span className="text-[14px] font-bold">£{price} / night</span>
        </div>
    );
}

export default AccomITEM;
