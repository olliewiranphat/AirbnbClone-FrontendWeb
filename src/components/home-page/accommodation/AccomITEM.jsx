import React, { useState } from 'react';

function AccomITEM({ image, location, rating, stayDetails, dateRange, price }) {
    const [isLiked, setIsLiked] = useState(false);

    const toggleHeart = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
         
            <div className="relative">
                <img 
                    src={image} 
                    alt={location} 
                    className="rounded-2xl bg-gray-300 w-full h-[290px] object-cover" 
                />
             
                <span className="absolute top-2 left-2 bg-white text-black text-[12px] px-2 py-1 rounded-md font-medium">
                    Guest favourite
                </span>
             
                <span 
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer"
                    onClick={toggleHeart}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isLiked ? "red" : "none"} 
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={isLiked ? "red" : "black"} 
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                </span>
            </div>

            <span className="text-[16px] font-semibold">{location}</span>
            
            <span className="text-[14px] text-[#6a6a6a]">⭐ {rating}</span>
            
            <span className="text-[14px] text-[#6a6a6a]'">{stayDetails}</span>
            
           
            <span className="text-[14px] text-[#6a6a6a]'">{dateRange}</span>
            
           
            <span className="text-[14px] font-bold">£{price} / night</span>
        </div>
    );
}

export default AccomITEM;
