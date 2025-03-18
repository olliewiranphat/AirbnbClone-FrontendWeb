import React from 'react'
import SignoutAdminBTN from './SignoutAdminBTN'
import SignupLoginBTN from '../home-page/user/SignupLoginBTN'


function UserBTN() {



    return (
        <div className='relative group flex flex-col'>
            {/* SIGNED OUT */}
            <SignupLoginBTN />

            {/* SIGNED IN */}
            <SignoutAdminBTN />
        </div>
    )
}

export default UserBTN