import React from 'react';
import AccomITEM from './AccomITEM';
import { accommodations } from './accommodation.data';

function AccomLIST() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-[40px] py-6'>
                {accommodations.map((item) => (
                    <AccomITEM
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        location={item.location}
                        rating={item.rating}
                        stayDetails={item.stayDetails}
                        dateRange={item.dateRange}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}

export default AccomLIST;
