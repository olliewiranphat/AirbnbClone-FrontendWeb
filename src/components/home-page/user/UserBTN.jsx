import React from 'react'
import SignupLoginBTN from './SignupLoginBTN'
import SignoutACCBTN from './SignoutACCBTN'


function UserBTN() {



    return (
        <div className='relative group flex flex-col'>
            {/* SIGNED OUT */}
            <SignupLoginBTN />

            {/* SIGNED IN */}
            <SignoutACCBTN />
        </div>
    )
}

export default UserBTN