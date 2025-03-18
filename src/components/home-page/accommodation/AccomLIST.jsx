import React from 'react';
import AccomITEM from './AccomITEM';

function AccomLIST() {
    // ข้อมูลรายการที่พัก
    const accommodations = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1678286771694-ed08e355dce8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Foto Hotel, ภูเก็ต',
            rating: 4.81,
            stayDetails: 'Infinity Pool and sea view',
            dateRange: '26 Jun – 1 Jul',
            price: 6700,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1732740587951-43667e9f4c6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Magic Mountain Cafe, พะเยา',
            rating: 5.0,
            stayDetails: 'Mountain and mist view',
            dateRange: '23–28 Apr',
            price: 115,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1681487709148-60044b9e3303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'ลีไวน์รักไทย รีสอร์ท, แม่ฮ่องสอน',
            rating: 4.93,
            stayDetails: 'Tea plantation and lake view',
            dateRange: '7–12 Apr',
            price: 113,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1681842749919-306fdc5b65a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Sala Khaoyai, เขาใหญ่',
            rating: 4.94,
            stayDetails: 'Panoramic mountain view',
            dateRange: '19–24 Jun',
            price: 8900,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Keemala, ภูเก็ต',
            rating: 4.86,
            stayDetails: 'Private villa and Andaman sea view',
            dateRange: '12–17 May',
            price: 7600,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1740530840288-c5424cf4a372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'The Ritz-Carlton, Bali',
            rating: 4.95,
            stayDetails: 'Luxury beachfront resort',
            dateRange: '10–15 Aug',
            price: 12000,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678286769819-538a80c44baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Six Senses Yao Noi, พังงา',
            rating: 4.98,
            stayDetails: 'Eco-friendly luxury villa',
            dateRange: '1–6 Sep',
            price: 15000,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678286769762-b6291545d818?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Anantara Golden Triangle, เชียงราย',
            rating: 4.89,
            stayDetails: 'Jungle retreat with elephant experience',
            dateRange: '20–25 Oct',
            price: 18000,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678286769433-ea9d91b7d610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Rayavadee Resort, กระบี่',
            rating: 4.92,
            stayDetails: 'Beachfront paradise surrounded by cliffs',
            dateRange: '15–20 Nov',
            price: 14000,
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678297270137-649734c4f549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGFjY29tbW9kYXRpb25zfGVufDB8fDB8fHww',
            location: 'Banyan Tree Samui, เกาะสมุย',
            rating: 4.97,
            stayDetails: 'Private pool villa overlooking the sea',
            dateRange: '5–10 Dec',
            price: 16000,
        },
    ];
    
      
        


    return (
        <>
            {/* ส่วนแสดงรายการ */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-[40px] py-6'>
                {accommodations.map((item, index) => (
                    <AccomITEM
                        key={index}
                        image={item.image}
                        location={item.location}
                        rating={item.rating}
                        stayDetails={item.stayDetails}
                        dateRange={item.dateRange}
                        price={item.price}
                    />
                ))}
            </div>

            {/* ส่วนปุ่มด้านล่าง */}
            {/* <div className='flex flex-col gap-4 items-center'>
                <span className='text-[18px] text-[#222222] font-semibold'> */}
                    {/* Continue exploring amazing views */}
                {/* </span>
                <button className='rounded-lg py-3 px-6 text-white bg-[#222222] hover:bg-black duration-300 cursor-pointer'>
                    Show more
                </button> */}
            {/* </div> */}
        </>
    );
}

export default AccomLIST;
