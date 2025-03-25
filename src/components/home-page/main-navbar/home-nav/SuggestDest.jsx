import React from "react";

const mockDestinations = [
    { name: "Nearby", icon: <img src="https://i.ibb.co/TDgFv4CZ/navigate-svgrepo-com.png" alt="icon" className="h-8 w-8 bg-blue-50 rounded-sm p-2" /> },
    { name: "Bangkok, Thailand", icon: <img src="https://i.ibb.co/7JKQgfMy/building-city-svgrepo-com.png" alt="icon" className="h-10 w-10 bg-blue-50 rounded-sm p-2" />},
    { name: "Chiang Mai, Thailand", icon: <img src="https://i.ibb.co/gnPW3Ww/mountain-svgrepo-com.png" alt="icon" className="h-9 w-10  bg-red-50 rounded-sm p-2" /> },
    { name: "Pattaya, Thailand", icon: <img src="https://i.ibb.co/yFpL89tv/island-svgrepo-com.png"  alt="icon" className="h-10 w-10 bg-orange-50   rounded-sm p-2" /> },
    { name: "Chiang Rai, Thailand", icon: <img src="https://i.ibb.co/gnPW3Ww/mountain-svgrepo-com.png" alt="icon" className="h-9 w-10  bg-red-50 rounded-sm p-2" /> },
    { name: "Phuket, Thailand", icon: <img src="https://i.ibb.co/Kjw51P6W/sea-and-sun-svgrepo-com.png" alt="icon" className="h-10 w-10 bg-green-50 rounded-sm p-2" /> },
    { name: "Chiang Dao, Thailand", icon: <img src="https://i.ibb.co/gnPW3Ww/mountain-svgrepo-com.png" alt="icon" className="h-9 w-10  bg-red-50 rounded-sm p-2" /> },
    { name: "Samui, Thailand", icon: <img src="https://i.ibb.co/yFpL89tv/island-svgrepo-com.png"  alt="icon" className="h-10 w-10 bg-orange-50   rounded-sm p-2" /> },
    
]

const SuggestDest = ({ searchQuery, onSelect }) => {
    const query = searchQuery || "";  // ตรวจสอบให้ searchQuery ไม่เป็น undefined
    // กรองข้อมูลโดยตรงตามตัวอักษรที่พิมพ์เข้ามา
    const filteredDestinations = mockDestinations.filter(dest =>
        dest.name.toLowerCase().includes(query.toLowerCase()) // ใช้ toLowerCase() เพื่อไม่ให้ผิดพลาดจากตัวพิมพ์ใหญ่-เล็ก
    );


    return (
        <div className="absolute h-50 left-0 top-12 w-[250px] bg-white shadow-lg rounded-lg p-2 z-50 mt-5 overflow-y-scroll">
            {filteredDestinations.length > 0 ? (
                filteredDestinations.map((dest, index) => (
                    <button
                        key={index}
                        className="flex text-sm h-20 items-center gap-5 p-2 hover:bg-gray-100 cursor-pointer w-full text-left"
                        onClick={() => onSelect(dest.name)}
                    >
                        <span className="text-xl">{dest.icon}</span>
                        <span>{dest.name}</span>
                    </button>
                ))
            ) : (
                <div className="p-2 text-gray-500">No destinations found</div>
            )}
        </div>
    );
};

export default SuggestDest;
