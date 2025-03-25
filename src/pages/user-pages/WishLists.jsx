import React, { useEffect } from 'react';
import useWishlistStore from '../../store/wishlistStore';
import AccomITEM from '../../components/home-page/accommodation/AccomITEM';
import { useAuth } from '@clerk/clerk-react';
// import { createUnlistWishlist, getWishlistHistory } from '../api/wishlistContoller';


function WishLists() {
    const { wishlist, getWishlistHistory } = useWishlistStore();
    const { getToken } = useAuth();

    useEffect(() => {
        const fetchWishlist = async () => {
            const token = await getToken(); 
            if (token) {
                await getWishlistHistory(token); 
            }
        };
        fetchWishlist();
    }, [getWishlistHistory, getToken]);

    if (!Array.isArray(wishlist)) {
        return <p className="text-gray-500 col-span-full text-center">Loading...</p>;
    }

    if (wishlist.length === 0) {
        return <p className="text-gray-500 col-span-full text-center">Your wishlist is empty.</p>;
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-[40px] py-6'>
                {wishlist.map((item) => {
                    console.log("Each item in wishlist",item)
                    const imageUrl = item?.Room?.[0]?.ImgsRoom?.[0]?.imageUrl || "default-image-url.jpg";

                    return (
                        <AccomITEM
                            key={item.accommodationID}
                            imageUrl={item.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
                            accommodationID={item.accommodationID}
                            title={item.title}
                            city={item.city}
                            country={item.country}
                            addressDetail={item.addressDetail}
                            pricePerNight={item.pricePerNight}
                            wishlist={wishlist} // ส่ง wishlist ผ่าน props
                        />
                    );
                })}
            </div>
        </>
    );
}

export default WishLists;


