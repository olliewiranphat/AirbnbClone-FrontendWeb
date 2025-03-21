import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import UserMainNav from '../components/user/UserMainNav'
import ContentFooter from '../components/ContentFooter'

function UserLayout() {
    return (
        <>  <div className='relative'>
            <UserMainNav />
        </div>
            <div className='pt-[80px]'>
                <Outlet />
                <ContentFooter />
                <Footer />
            </div>

        </>
    )
}

export default UserLayout