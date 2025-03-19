import { SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'

function UserAccountLIST() {
    return (
        <div className='absolute top-[50px] shadow-xl right-0 rounded-md flex items-start flex-col text-[14px] w-[250px] bg-white z-50'>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
<<<<<<< HEAD
                <ReloadLink to='/guest/messages' className='strong cursor-pointer'>Message</ReloadLink>
                <ReloadLink to='/notifications' className='strong cursor-pointer'>Notifications</ReloadLink>
                <ReloadLink to='/trips' className='strong cursor-pointer'>Trips</ReloadLink>
                <ReloadLink to='/wishlists' className='strong cursor-pointer'>Wishlists</ReloadLink>
            </div>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/host/homes' className='cursor-pointer'>Airbnb your home</ReloadLink>
                <ReloadLink to='/host/experiences' className='cursor-pointer'>Host an experience</ReloadLink>
                <ReloadLink to='/account-settings' className='cursor-pointer'>Account</ReloadLink>
=======
                <ReloadLink to='/guest/messages' className='strong'>Message</ReloadLink>
                {/* <ReloadLink to='/notifications' className='strong'>Notifications</ReloadLink> */}
                <ReloadLink to='/trips' className='strong'>Trips</ReloadLink>
                <ReloadLink to='/wishlists' className='strong'>Wishlists</ReloadLink>
            </div>
            <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
                {/* <ReloadLink to='/host/experiences'>Host an experience</ReloadLink> */}
                <ReloadLink to='/account-settings'>Account</ReloadLink>
>>>>>>> bc1d0332aa4ff020eee44c83a3b1eae848f43ad0
            </div>
            <div className='px-4 py-5 flex flex-col gap-5 items-start'>
                <ReloadLink to='/giftcards' className='cursor-pointer'>Gift cards</ReloadLink>
                <ReloadLink to='/help cursor-pointer' className='cursor-pointer'>Help Center</ReloadLink>
                <SignOutButton className='cursor-pointer' redirectUrl='/'>Log out</SignOutButton>
            </div>
        </div>
    )
}

export default UserAccountLIST
