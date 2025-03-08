import { AlignJustify } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import SignoutBTN from './SignoutBTN'
import SignupLoginLIST from './SignupLoginLIST'

function UserBTN() {

    const [showLIST, setShowLIST] = useState(false)
    const menuRef = useRef(null);
    // ปิด popup ถ้าคลิกข้างนอก
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowLIST(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='relative group flex flex-col' ref={menuRef}>
            <SignedOut>
                <button onClick={() => setShowLIST(!showLIST)} className='h-[50px] rounded-full flex gap-1 py-2 px-3 border border-gray-300 items-center hover:shadow-xl'>
                    <AlignJustify className='h-[18px]' />
                    <img src="https://i.ibb.co/p6jNPQD5/Screenshot-2025-03-08-112025.png" alt="profile" className='h-[32px]' />
                </button>
            </SignedOut>

            <SignedIn>
                <SignoutBTN />
            </SignedIn>

            {
                showLIST && <SignupLoginLIST />
            }
        </div>
    )
}

export default UserBTN