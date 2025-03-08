import React, { useState } from 'react'
import Popular from './contents/Popular'
import ArtsCulture from './contents/ArtsCulture'
import Outdoors from './contents/Outdoors'
import Mountains from './contents/Mountains'
import Beach from './contents/Beach'
import UniqueStays from './contents/UniqueStays'
import Categories from './contents/Categories'
import ThingsToDo from './contents/ThingsToDo'
import TravelTips from './contents/TravelTips'
import AirbnbFriendly from './contents/AirbnbFriendly'



const taps = ["Popular", "Arts & culture", "Outdoors", "Mountains", "Beach", "Unique Stays", "Categories", "Things to do", "Travel tips & inspiration", "Airbnb-friendly apartments"]

function Inspiration() {
    const [pickedTap, setPickedTap] = useState(taps[0])
    // console.log('pickedTap', pickedTap);


    return (
        <div className='px-[40px] flex flex-col gap-2 mt-10 pb-12 border-b-[1px] border-gray-300'>
            <span className='text-[24px] text-[#222222] header'>Inspiration for future gataways</span>
            <div className=' flex gap-6 text-[14px] border-gray-300 border-b-[1px] text-[#6a6a6a] mb-6'>
                {
                    taps.map((tap, inx) => (<button key={inx} onClick={() => setPickedTap(tap)} className={`py-3 ${pickedTap == tap ? 'border-b-2 border-black text-black' : ''}`}>{tap}</button>))
                }
            </div>
            {pickedTap == "Popular" && <Popular />}
            {pickedTap == "Arts & culture" && <ArtsCulture />}
            {pickedTap == "Outdoors" && <Outdoors />}
            {pickedTap == "Mountains" && <Mountains />}
            {pickedTap == "Beach" && <Beach />}
            {pickedTap == "Unique Stays" && <UniqueStays />}
            {pickedTap == "Categories" && <Categories />}
            {pickedTap == "Things to do" && <ThingsToDo />}
            {pickedTap == "Travel tips & inspiration" && <TravelTips />}
            {pickedTap == "Airbnb-friendly apartments" && <AirbnbFriendly />}
        </div>
    )
}

export default Inspiration