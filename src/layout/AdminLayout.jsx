import React from 'react'
import Footer from '../components/Footer'
import MainNavBar from '../components/home-page/main-navbar/MainNavBar'
import AdminSidebar from '../components/admin-page/AdminSidebar'
import { Outlet } from 'react-router'

function AdminLayout() {
    return (
        <>
            <div className='fixed w-full z-50'>
                <MainNavBar />
            </div>
            <div className='mx-2 pt-[13%] w-full flex gap-6'>
                <AdminSidebar />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminLayout