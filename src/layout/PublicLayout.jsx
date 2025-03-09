import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import MainNavBar from '../components/home-page/main-navbar/MainNavBar'
import MainIcons from '../components/home-page/MainIcons'

function PublicLayout() {
    return (
        <>
            <div className='fixed w-full z-50'>
                <MainNavBar />
                <MainIcons />
            </div>
            <div className='pt-[20%] w-full'>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default PublicLayout