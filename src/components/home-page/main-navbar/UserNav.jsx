import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'
import { Globe } from 'lucide-react'
import UserBTN from '../user/UserBTN'


function UserNav() {
    return (
        <div className='flex gap-5 text-[14px] flex-wrap items-center'>
            <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
            <button>
                <Globe className='h-[18px]' />
            </button>
            {/* USER SignupLogin */}
            <UserBTN />
        </div>
    )
}

export default UserNav