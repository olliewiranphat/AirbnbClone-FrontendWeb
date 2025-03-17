import React from 'react'
import TableCheck from './TableCheck'

function ContentStayit() {
    return (
        <div className='px-[40px] text-center bg-gray-100 gap-4 p-2'>
            <h1 className='text-2xl font-bold mb-4'>Stayzy it easily with Stayzy Setup</h1>
            <div>Photo1</div>
            {/* 3 col-text */}
            <div className='px-[40px] flex bg-gray-100 gap-4 p-2 mb-8'>
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

<<<<<<< HEAD
    {/* new */ }
            <h2 className='text-2xl font-bold mb-4'>Need a place where you can host?
                Try Airbnb-friendly apartments</h2>
            <div>Photo2</div>
            <div>
                {/* 1 */}
                <div className='text-md'>We’ve partnered with apartment buildings across the US so you can rent a place to live and host on Airbnb part-time. The typical host earned $3650/year and hosted 28 nights. *</div>
                {/* 2 */}
                <div className='text-xs'>*The typical Host earnings amount represents the median amount of earnings for Hosts in US Airbnb-friendly apartment buildings between Jan1 - Dec 31, 2023, according to internal Airbnb data for revenue earned by Hosts.</div>
            </div>
            <div><TableCheck /></div>
        </div >
    )
=======
        <div><TableCheck/></div>
    </div>
  )
>>>>>>> 9c76bc69459f289dfdb68a9398baebf96dfae61f
}

export default ContentStayit