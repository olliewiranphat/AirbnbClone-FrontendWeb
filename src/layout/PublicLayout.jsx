import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import MainNavBar from '../components/home-page/main-navbar/MainNavBar'

function PublicLayout() {
    return (
        <>
            <div className='fixed w-full z-50'>
                <MainNavBar />

            </div>
            <div className='pt-[20%] w-full'>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default PublicLayout