import React from 'react'
import ReloadLink from '../../../utils/ReloadLink'
import { SignInButton, SignUpButton } from '@clerk/clerk-react'

function SignupLoginLIST() {
    return (
        <div className='absolute top-[50px] right-0 rounded-md flex flex-col text-[14px] w-[230px] bg-white z-50 py-1 '>
            <div className='p-4 border-b-[1px] border-gray-300 flex flex-col gap-5 items-start'>
                <SignUpButton mode='modal' className='header cursor-pointer'>Sign up</SignUpButton>
                <SignInButton mode='modal' className='cursor-pointer'>Log in</SignInButton>
            </div>
            <div className='p-4 flex flex-col gap-5 items-start'>
                <ReloadLink to='/giftcards' className='cursor-pointer'>Gift cards</ReloadLink>
                <ReloadLink to='/host/homes' className='cursor-pointer'>Airbnb your home</ReloadLink>
                <ReloadLink to='/host/experiences' className='cursor-pointer'>Host an experience</ReloadLink>
                <ReloadLink to='/help' className='cursor-pointer'>Help center</ReloadLink>
            </div>
        </div>
    )
}

export default SignupLoginLIST