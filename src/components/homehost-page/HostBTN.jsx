import React from 'react'
import ReloadLink from '../../utils/ReloadLink'
import { SignOutButton } from '@clerk/clerk-react'
import BTNhost from '../../components/homehost-page/BTNhost'
function HostBTN() {
  return (
    <div className='relative group flex flex-col'>
        <BTNhost/>

      {/* <div className="dropdown dropdown-end">
        <div tabIndex={0} role="" className="btn m-1"></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
          <div className='flex flex-col gap-4 px-6 items-start pb-4'>
            <ReloadLink to='/account-settings' className="hover:cursor-pointer strong " >Account</ReloadLink>
            <ReloadLink to='/giftcards' className="hover:cursor-pointer strong ">Gift cards</ReloadLink>
            <ReloadLink to='/help' className="hover:cursor-pointer strong ">Help Center</ReloadLink>
          </div>
          <span className='border'></span>
          <div className='flex flex-col gap-4 px-6 items-start pt-4'>
            <ReloadLink to='/host/experiences'>Host an experience</ReloadLink>
            <ReloadLink to='/giftcards' className="hover:cursor-pointer strong ">Gift cards</ReloadLink>
            <ReloadLink to='/help' className="hover:cursor-pointer strong ">Help Center</ReloadLink>
            <SignOutButton>Log out</SignOutButton>
          </div>
        </ul>
      </div> */}
      {/* <div className='absolute top-[50px] shadow-xl right-0 rounded-md flex items-start flex-col text-[14px] w-[250px] bg-white z-50'>
          <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
            <ReloadLink to='/guest/messages' className='strong'>Message</ReloadLink>
            <ReloadLink to='/notifications' className='strong'>Notifications</ReloadLink>
            <ReloadLink to='/trips' className='strong'>Trips</ReloadLink>
            <ReloadLink to='/wishlists' className='strong'>Wishlists</ReloadLink>
          </div>
          <div className='w-full px-4 py-5 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
            <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
            <ReloadLink to='/account-settings'>Account</ReloadLink>
          </div>
          <div className='px-4 py-5 flex flex-col gap-5 items-start'>
            <ReloadLink to='/giftcards'>Gift cards</ReloadLink>
            
          </div>
        </div> */}
    </div >
  )
}

export default HostBTN