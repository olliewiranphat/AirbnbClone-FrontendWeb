import { SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'

function UserAccountLIST() {
    return (
        <div className='absolute top-[50px] shadow-xl right-0 rounded-md flex items-start flex-col text-[14px] w-[250px] bg-white z-50'>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/guest/messages' className='strong'>Message</ReloadLink>
                <ReloadLink to='/notifications' className='strong'>Notifications</ReloadLink>
                <ReloadLink to='/trips' className='strong'>Trips</ReloadLink>
                <ReloadLink to='/wishlists' className='strong'>Wishlists</ReloadLink>
            </div>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
                <ReloadLink to='/host/experiences'>Host an experience</ReloadLink>
                <ReloadLink to='/account-settings'>Account</ReloadLink>
            </div>
            <div className='px-4 py-5 flex flex-col gap-5 items-start'>
                <ReloadLink to='/giftcards'>Gift cards</ReloadLink>
                <ReloadLink to='/help'>Help Center</ReloadLink>
                <SignOutButton>Log out</SignOutButton>
            </div>
        </div>
    )
}

export default UserAccountLIST