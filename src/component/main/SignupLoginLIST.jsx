import React from 'react'
import ReloadLink from '../../utils/ReloadLink'
import { SignInButton, SignUpButton } from '@clerk/clerk-react'

function SignupLoginLIST() {
    return (
        <div className='absolute top-[50px] right-0 rounded-md flex flex-col text-[14px] w-[230px] bg-white z-50'>
            <div className=' p-4 border-b-[1px] border-gray-300 flex flex-col gap-4 items-start'>
                <SignUpButton mode='modal' className='font-semibold'>Sign up</SignUpButton>
                <SignInButton mode='modal'>Log in</SignInButton>
            </div>
            <div className='p-4 flex flex-col gap-4 items-start'>
                <ReloadLink to='/giftcards'>Gift cards</ReloadLink>
                <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
                <ReloadLink to='/host/experiences'>Host an experience</ReloadLink>
                <ReloadLink to='/help'>Help center</ReloadLink>
            </div>
        </div>
    )
}

export default SignupLoginLIST