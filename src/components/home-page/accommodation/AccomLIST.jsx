import React, { useEffect } from 'react';
import AccomITEM from './AccomITEM';
import useAdminStore from '../../../store/AdminStore';
import { useAuth } from '@clerk/clerk-react';

function AccomLIST() {
    const { getToken } = useAuth()
    const actionGetAccomAmen = useAdminStore(state => state.actionGetAllAccommodations)
    const allAccomAmen = useAdminStore(state => state.allAccommodatons)
    useEffect(() => {
        const fetchAccomAmen = async () => {
            const token = await getToken()
            actionGetAccomAmen(token)
        }
        fetchAccomAmen()
    }, [])
    console.log('allAccomAmen Hi', allAccomAmen);
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-[40px] py-6'>
                {allAccomAmen?.map((item) => (
                    <AccomITEM
                        key={item.accommodationID}
                        imageUrl={item.Room.length > 0 ? item?.Room[0].ImgsRoom[0].imageUrl : ""}
                        accommodationID={item.accommodationID}
                        title={item.title}
                        city={item.city}
                        country={item.country}
                        addressDetail={item.addressDetail}
                        pricePerNight={item.pricePerNight}
                        // rating={item?.Review[0].rating}
                    />
                ))}
            </div>
        </>
    );
}

export default AccomLIST;
