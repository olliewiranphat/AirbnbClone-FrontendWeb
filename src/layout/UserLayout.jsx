import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import UserMainNav from '../components/user/UserMainNav'

function UserLayout() {
    return (
        <>  <div className='relative'>
            <UserMainNav />
        </div>
            <div className='pt-[80px]'>
                <Outlet />
                <Footer />
            </div>

        </>
    )
}

export default UserLayout