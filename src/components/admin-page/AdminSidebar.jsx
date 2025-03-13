import React, { useState } from 'react'
import { Home, List, Calendar, Users, Mail, CreditCard, Star, Settings } from "lucide-react";
import ReloadingLink from '../../utils/ReloadLink'
import { Link } from 'react-router';

function AdminSidebar() {

    const [active, setActive] = useState("Dashboard");
    return (

        <div className="h-full w-[20%]  shadow-lg p-4 flex flex-col bg-white items-center">
            <h1 className="text-2xl font-bold text-[#FF385C] pb-6">Admin Panel</h1>
            <nav className="flex flex-col gap-6 ">
                <div className='flex gap-4'>
                    <Home />
                    <Link to='/admin' className='block pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>Dashboard</Link>
                </div>
                <div className='account flex items-center gap-1 relative '>
                    <List className='' />
                    <span className=' absolute pl-10 bottom-[-3px]'>Management</span>
                </div>
                <ul className='pl-10 flex flex-col gap-4 text-[14px]'>
                    <Link to='/admin/management/all-accommodations' className='inline-block  pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Manage Accomodation</span>
                    </Link>
                    <Link to='/admin/management/all-users' className='inline-block  pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Manage Users</span>
                    </Link>
                    <Link to='/admin/management/all-hosts' className='inline-block  pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Manage Host</span>
                    </Link>
                </ul>
                <div className='account flex items-center gap-1 relative '>
                    <Calendar className='' />
                    <span className=' absolute pl-10 bottom-[-3px]'>Reservations</span>
                </div>
                <ul className='pl-10 flex flex-col gap-4 mb-2 text-[14px]'>
                    <Link to='/booking' className='inline-block w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Booking</span>
                    </Link>
                </ul>
                <div className='account flex items-center gap-1 relative '>
                    <Users className='' />
                    <span className=' absolute pl-10 bottom-[-3px]'>Account</span>
                </div>
                <ul className='pl-10 flex flex-col gap-4 mb-2 text-[14px]'>
                    <Link to='/account-settings' className='inline-block  pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Your Profile</span>
                    </Link>
                    <Link to='/booking-history' className='inline-block  pb-1 w-auto cursor-pointer border-transparent hover:border-b-2  hover:border-[#FF385C] hover:duration-200'>
                        <span>Booking History</span>
                    </Link>
                </ul>

                <div className='flex gap-4'>
                    <Settings />
                    <button className=''> Settings</button>
                </div>

                {/* {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition 
                ${active === item.name ? "bg-red-500 text-white" : ""}`}

                        onClick={() => setActive(item.name)}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                    </button>
                ))} */}
            </nav>
        </div>


    )
}

export default AdminSidebar