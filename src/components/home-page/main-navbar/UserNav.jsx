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
            <ReloadLink
                to={role === "HOST" ? "/host-center" : role === "ADMIN" ? "/admin" : "/host/homes"}
                className="cursor-pointer header"
            >
                {
                    role === "HOST" ? "Switch to Host" : role === "ADMIN" ? "Switch to Admin" : "Stayzy your home"
                }
            </ReloadLink>
            <button>
                <Globe className='h-[18px] cursor-pointer' />
            </button>
            {/* USER SignupLogin */}
            <UserBTN />
        </div>
    )
}

export default UserNav