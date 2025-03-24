import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useAuth } from '@clerk/clerk-react';
import useWishlistStore from '../../../store/wishlistStore';
import { Link } from 'react-router-dom';

function AccomITEM({
    accommodationID,
    title,
    city,
    country,
    addressDetail,
    pricePerNight,
    imageUrl,
    rating,
    distance,
    dateRange,
    totalPrice,
    // New props from the accommodation object
    accommodation,
}) {


    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { getToken } = useAuth();
    const { wishlist, toggleWishlistItem } = useWishlistStore();


    // Extract values from the accommodation prop if provided
    const ID = accommodation?.ID || accommodationID;
    const AccommodationName = accommodation?.AccommodationName || title;
    const Location = accommodation?.Location || (city && country ? `${city}, ${country}` : '');
    const Price = accommodation?.Price || pricePerNight;
    const MaxGuests = accommodation?.MaxGuests;
    const Bedrooms = accommodation?.Bedrooms;
    const Bathrooms = accommodation?.Bathrooms;
    const ImageURL = accommodation?.ImageURL || imageUrl;
    const Rating = accommodation?.Rating || rating;



    const imageArray = Array.isArray(ImageURL) ? ImageURL : (ImageURL ? [ImageURL] : []);

    const isLiked = Array.isArray(wishlist) && wishlist.some((item) => item.accommodationID === ID);

    const handleNextSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % imageArray.length);
    };

    const handlePrevSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : imageArray.length - 1));
    };

    const handleToggleHeart = async (e) => {
        e.stopPropagation();
        const token = await getToken();
        const item = {
            accommodationID: ID,
            title: AccommodationName,
            city,
            country,
            addressDetail,
            pricePerNight: Price,
            imageUrl: ImageURL,
        };
        console.log("Item before toggle wishlist",item)
        toggleWishlistItem(item, token);
    };

    return (
        <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Heart button */}
                <span
                    className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md cursor-pointer z-10 hover:scale-110 transition-transform duration-200"
                    onClick={handleToggleHeart}
                >
                    <Heart size={20} fill={isLiked ? 'red' : 'none'} stroke={isLiked ? 'red' : 'black'} />
                </span>

                {/* Image */}
                {imageArray.length > 0 && (
                    <Link to={`/search/accommodation-detail/${ID}`}>
                        <img 
                            className='rounded-2xl bg-gray-300 w-full h-[260px] object-cover' 
                            alt={AccommodationName || "accommodation"} 
                            src={imageArray[currentSlide]} 
                        />
                    </Link>
                )}

                {/* Left arrow button */}
                {isHovered && imageArray.length > 1 && (
                    <button
                        onClick={handlePrevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full shadow-md cursor-pointer z-10"
                    >
                        <ChevronLeft size={24} color="white" />
                    </button>
                )}

                {/* Right arrow button */}
                {isHovered && imageArray.length > 1 && (
                    <button
                        onClick={handleNextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full shadow-md cursor-pointer z-10"
                    >
                        <ChevronRight size={24} color="white" />
                    </button>
                )}
            </div>

            {/* Accommodation details */}
            <Link to={`/search/accommodation-detail/${ID}`}>
                <div className="flex flex-col gap-1 p-2">
                    {/* Name and rating */}
                    <div className="flex justify-between items-center">
                        <span className="text-[16px] font-semibold">{AccommodationName}</span>
                        <div className="flex items-center gap-1">
                            <Star size={14} fill="#FFD700" stroke="#FFD700" />
                            <span className="text-[14px] text-[#6a6a6a]">{Rating}</span>
                        </div>
                    </div>

                    {/* Location and distance */}
                    <span className="text-[14px] text-[#6a6a6a]">
                        {Location}
                        {distance && addressDetail && ` - ${distance} miles to ${addressDetail}`}
                    </span>

                    {/* Date range if available */}
                    {dateRange && (
                        <span className="text-[14px] text-[#6a6a6a]">
                            {dateRange}
                        </span>
                    )}

                    {/* Additional accommodation details if available */}
                    {(MaxGuests || Bedrooms || Bathrooms) && (
                        <div className="flex flex-wrap gap-2 mb-2 text-[14px] text-gray-500">
                            {MaxGuests && <span>{MaxGuests} guests</span>}
                            {MaxGuests && (Bedrooms || Bathrooms) && <span>•</span>}
                            {Bedrooms && <span>{Bedrooms} bedrooms</span>}
                            {Bedrooms && Bathrooms && <span>•</span>}
                            {Bathrooms && <span>{Bathrooms} bathrooms</span>}
                        </div>
                    )}

                    {/* Price */}
                    <span className="text-[14px] font-bold">
                        {Price && `฿${Price} / night`}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default AccomITEM;