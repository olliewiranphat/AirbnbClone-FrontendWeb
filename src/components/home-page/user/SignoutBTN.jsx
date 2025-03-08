import { AlignJustify } from 'lucide-react'
import React from 'react'

function SignoutBTN() {
    return (
        <button className='h-[50px] rounded-full flex gap-1 py-2 px-3 border border-gray-300 items-center hover:shadow-xl'>
            <AlignJustify className='h-[18px]' />
            <img src="" alt="profile" className='h-[32px] bg-slate-500 rounded-full' />
        </button>
    )
}

export default SignoutBTN