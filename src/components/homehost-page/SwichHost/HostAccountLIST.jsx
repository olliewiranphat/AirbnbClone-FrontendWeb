import { SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'

function HostAccountLIST() {
    return (
        <div className='absolute top-[50px] shadow-xl right-0 rounded-md flex items-start flex-col text-[14px] w-[250px] bg-white z-50'>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/account-settings' className="hover:cursor-pointer strong " >Account</ReloadLink>
                <ReloadLink to='/giftcards' className="hover:cursor-pointer strong ">Gift cards</ReloadLink>
            </div>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/' className="hover:cursor-pointer strong ">Swicth to travel </ReloadLink>
                <ReloadLink to='/help' className="hover:cursor-pointer strong ">Help Center</ReloadLink>
                <SignOutButton>Log out</SignOutButton>
            </div>
        </div>
    )
}

export default HostAccountLIST