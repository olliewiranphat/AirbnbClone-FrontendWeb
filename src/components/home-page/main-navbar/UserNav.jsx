import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'
import { Globe } from 'lucide-react'
import UserBTN from '../user/UserBTN'
import useUserStore from '../../../store/UserStore'
import { useUser } from '@clerk/clerk-react'


function UserNav() {
    const { user } = useUser()
    const role = user?.publicMetadata?.role

    return (
        <div className='flex gap-5 text-[14px] flex-wrap items-center'>
            {
                role === "HOST" ? (<ReloadLink to='/host-center' className='cursor-pointer header'>Switch to host</ReloadLink>)
                    : (<ReloadLink to='/host/homes' className='cursor-pointer header'>Stayzy your home</ReloadLink>)
            }
            <button>
                <Globe className='h-[18px] cursor-pointer' />
            </button>
            {/* USER SignupLogin */}
            <UserBTN />
        </div>
    )
}

export default UserNav