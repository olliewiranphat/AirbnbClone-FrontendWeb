import React, { useEffect, useRef, useState } from 'react'
import SignupLoginLIST from './SignupLoginLIST'
import { SignedOut } from '@clerk/clerk-react';
import { AlignJustify } from 'lucide-react';

function SignupLoginBTN() {
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

    return (
        <div ref={menuRef}>
            <SignedOut >
                <button onClick={() => setShowLIST(!showLIST)} className='h-[50px] rounded-full flex gap-1 py-2 px-3 border border-gray-300 items-center hover:shadow-xl'>
                    <AlignJustify className='h-[18px]' />
                    <img src="https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png" alt="profile" className='h-[32px]' />
                </button>
                {
                    showLIST && <SignupLoginLIST />
                }
            </SignedOut>
        </div>
    )
}

export default SignupLoginBTN