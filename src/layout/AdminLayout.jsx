import React from 'react'
import Footer from '../components/Footer'
import UserMainNav from '../components/user/UserMainNav'
import AdminSidebar from '../components/admin-page/AdminSidebar'
import { Outlet } from 'react-router'

function AdminLayout() {
    return (
        <>
            <div className='fixed w-full z-50'>
                <UserMainNav />
            </div>
            <div className='mx-2 pt-[6%] w-full flex gap-6'>
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