import React from 'react'
import AirbnbLOGO from '../home-page/main-navbar/AirbnbLOGO'
import UserNav from '../home-page/main-navbar/UserNav'

function UserMainNav() {
    return (
        <div className='w-screen h-[80px] fixed px-[40px] flex justify-between'>
            <AirbnbLOGO />

            <div className='flex items-center'>
                <UserNav />
            </div>
        </div>
    )
}

export default UserMainNav