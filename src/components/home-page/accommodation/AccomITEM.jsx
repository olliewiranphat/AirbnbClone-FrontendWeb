import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
// import useWishlistStore from "../../../store/wishlistStore";
import { useAuth } from '@clerk/clerk-react'

function AccomITEM({ accommodationID, title, city, country, addressDetail, pricePerNight, imageUrl}) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    // const { wishlist, toggleWishlistItem } = useWishlistStore();
    const { getToken } = useAuth()

    // const isLiked = wishlist.some((item) => item.id === id);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => prev + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleToggleHeart = async () => {
        const token = await getToken()
        toggleWishlistItem({
            accommodationID,
            title,
            city,
            country,
            addressDetail,
            pricePerNight,
            // imageUrl,
            // rating
        }, token);
        // console.log("Item added to wishlist:", { id, image, location, rating, stayDetails, dateRange, price });
    };
//
    return (

        <div>
            <div className="flex justify-between items-center flex-col">
                <img className='rounded-2xl bg-gray-300 w-full h-[260px] object-cover' alt="accommodation" src={imageUrl} />
                <span className="text-[16px] font-semibold">{title}</span>
                <div className="flex items-center text-[#6a6a6a]">
                    <Star size={14} color="#6a6a6a" />
                    {/* <span className="ml-1 text-[14px]">{rating}</span> */}
                </div>
            </div>
            <span className="text-[14px] text-[#6a6a6a]">{addressDetail}</span>
            <span className="text-[14px] text-[#6a6a6a]">-</span>
            <span className="text-[14px] font-bold">฿{pricePerNight} / night</span>
        </div >

    );
}

export default AccomITEM;
