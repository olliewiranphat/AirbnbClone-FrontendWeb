import React from 'react'
import HostNav from '../../components/homehost-page/SwichHost/HostNav'

function HostDashboard() {
    return (
        <div className='h-full w-full flex flex-col gap-2 p-5 mb-20'>
            {/* nav */}
            <div><HostNav/></div>

            <div className='flex justify-between mt-10 ml-10 mr-10 mb-8'>
                <h1 className='text-2xl font-semibold'>Welcome Host </h1>
            </div>
            <div className="stats shadow">
                {/* 1 */}
                <div className="stat">
                    <div className="stat-title">Total Earning</div>
                    <div className="stat-value">89,400</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                {/* 2 */}
                <div className="stat">
                    <div className="stat-title">Total Reservations</div>
                    <div className="stat-value">1,400</div>
                    <div className="stat-desc">in this month</div>
                </div>
            </div>



            <div className='flex justify-between mt-10 ml-10 mr-10 mb-8'>
                <h1 className='text-2xl font-semibold'>Your reservations</h1>
            </div>
            
        </div>
    )
}

export default HostDashboard