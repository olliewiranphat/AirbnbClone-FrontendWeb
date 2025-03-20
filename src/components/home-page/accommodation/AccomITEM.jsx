import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useWishlistStore from "../../../store/wishlistStore";
import {useAuth } from '@clerk/clerk-react'

function AccomITEM({ id, image, location, rating, stayDetails, dateRange, price }) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { wishlist, toggleWishlistItem } = useWishlistStore();
    const {getToken} = useAuth()

    const isLiked = wishlist.some((item) => item.id === id);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => prev + 1);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleToggleHeart = async () => {
        const token = await getToken()
        toggleWishlistItem({ 
            id, 
            image, 
            location, 
            rating, 
            stayDetails, 
            dateRange, 
            price 
        },token);
        console.log("Item added to wishlist:", { id, image, location, rating, stayDetails, dateRange, price });
    };

    return (
        <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={image}
                    alt={location}
                    className="rounded-2xl bg-gray-300 w-full h-[290px] object-cover"
                />
                <span 
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer" 
                    onClick={handleToggleHeart}
                >
                    <Heart 
                        size={20} 
                        fill={isLiked ? "red" : "none"} 
                        stroke={isLiked ? "red" : "black"} 
                    />
                </span>

                {isHovered && currentSlide > 0 && (
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-4 top-[50%] transform -translate-y-[50%] bg-white p-2 rounded-full shadow-md cursor-pointer"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {isHovered && (
                    <button
                        onClick={handleNextSlide}
                        className="absolute right-4 top-[50%] transform -translate-y-[50%] bg-white p-2 rounded-full shadow-md cursor-pointer"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>

            <div className="flex justify-between items-center">
                <span className="text-[16px] font-semibold">{location}</span>
                <div className="flex items-center text-[#6a6a6a]">
                    <Star size={14} color="#6a6a6a" />
                    <span className="ml-1 text-[14px]">{rating}</span>
                </div>
            </div>
            <span className="text-[14px] text-[#6a6a6a]">{stayDetails}</span>
            <span className="text-[14px] text-[#6a6a6a]">{dateRange}</span>
            <span className="text-[14px] font-bold">฿{price} / night</span>
        </div>
    );
}

export default AccomITEM;
