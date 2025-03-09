import { AlignJustify } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import UserAccountLIST from './UserAccountLIST';
import { SignedIn, useUser } from '@clerk/clerk-react';

function SignoutACCBTN() {
    const { user } = useUser()
    const [showLIST, setShowLIST] = useState(false)
    const menuRef = useRef(null);
    //close popup when click outside:
    useEffect(() => {
        const hdlClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowLIST(false);
            }
        };

        document.addEventListener("mousedown", hdlClickOutside);
        return () => {
            document.removeEventListener("mousedown", hdlClickOutside);
        };
    }, []);

    return (<div ref={menuRef}>
        <SignedIn className='relative' >
            <button onClick={() => setShowLIST(!showLIST)} className='h-[50px] rounded-full flex gap-1 py-2 px-3 border border-gray-300 items-center hover:shadow-xl'>
                <AlignJustify className='h-[18px]' />
                <img src={user?.imageUrl} alt="profile" className='h-[32px] w-[32px] bg-slate-500 rounded-full' />
            </button>
            {
                showLIST && <UserAccountLIST />
            }
        </SignedIn>
    </div>
    )
}

export default SignoutACCBTN