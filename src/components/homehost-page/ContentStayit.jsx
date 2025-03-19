import React from 'react'
import TableCheck from './TableCheck'

function ContentStayit() {
    return (
        <div className='px-[40px] text-center gap-4 p-2'>
            <h1 className='text-2xl font-bold mb-10'>Stayzy it easily with Stayzy Setup</h1>
            <div class="carousel-item w-full">
                <img
                    src="https://i.ibb.co/ch7KVnKP/message-Image-1741761829286.jpg"
                    class="relative w-full h-90 object-cover bg-gray-300 rounded-lg overflow-hidden"
                    alt="Tailwind CSS Carousel component"
                />
            </div>
            {/* 3 col-text */}
            <div className='px-[40px] flex flex-1 w-full h-full gap-4 p-2 mb-28'>
                {/* col-1 */}
                <div>
                    <h2 className='font-semibold'>One-to-one guidance from a superhost</h2>
                    <p>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.</p>
                </div>
                {/* col-2 */}
                <div>
                    <h2 className='font-semibold'>An experienced guest for your first booking</h2>
                    <p>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Stayzy.</p>
                </div>
                {/* col-3 */}
                <div>
                    <h2 className='font-semibold'>Specialized support from Stayzy</h2>
                    <p>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
                </div>
            </div>

            <div><TableCheck /></div>
        </div>
    )
}

export default ContentStayit