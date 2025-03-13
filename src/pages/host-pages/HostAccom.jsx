import React from 'react'
import HostNav from '../../components/homehost-page/HostNav'
import ReloadLink from '../../utils/ReloadLink'

function HostAccom() {
    return (
    <div className='h-full w-full flex flex-col gap-2 p-5 mb-20'>
        {/* Nav */}
        <div><HostNav/></div>
        {/* Listing */}
        <div className='flex justify-between mt-10 ml-10 mr-10 mb-8'>
            <h1 className='text-3xl font-semibold'>Your listing</h1>
            <ReloadLink to='/host-center/host/accommodations/add'
            className='text-lg text-white bg-pink-500 border rounded-md p-2'>Create a new House</ReloadLink>
        </div>

        {/* get all home */}
        <div className="overflow-x-auto">
            <table className="table table-zebra">
            {/* head */}
            <thead>
             <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            </table>
        </div>
        {/* card home */}
        <div className='flex justify-between border p-4 shadow-xl m-5'>
        <div className='bg-gray-500 p-10'>img</div>
        <div className='bg-gray-300 p-10'>delete</div>
        </div>

        </div>
    )
}

export default HostAccom