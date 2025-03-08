import React from 'react'
import ReloadLink from '../../utils/ReloadLink'

function HostHomes() {
    return (
        <>
            <div className='h-[80px] px-[40px] bg-slate-400'>
                <ReloadLink to='/'>
                    <img src="https://i.ibb.co/VpW4G8j0/Screenshot-2025-03-08-104825.png" alt="airbnb" />
                </ReloadLink>
            </div>
            <div className='px-[40px] flex flex-wrap bg-gray-400'>
                <div className='flex-1 bg-amber-200'>Airbnb it You cloud learn.</div>
                <div className='flex-1 bg-green-200'>Map</div>
            </div>
        </>
    )
}

export default HostHomes