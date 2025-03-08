import React, { useState } from 'react'
import ReloadLink from '../../../utils/ReloadLink'
import { Globe } from 'lucide-react'
import { useLocation } from 'react-router'
import HomeNav from './HomeNav'
import EXPNav from './EXPNav'
import UserBTN from '../user/UserBTN'


function MainNavBar() {
    const location = useLocation()
    console.log('location.pathname', location.pathname);
    const [showEXP, setShowEXP] = useState(false)
    const hdlClickEXP = () => {
        setShowEXP(true)
    }
    const hdlClickHome = () => {
        setShowEXP(false)
    }

    return (
        <div className=' pb-6 border-b-[1px] border-gray-200  flex-wrap'>
            <div className='h-[80px] px-[40px] py-[15px] flex items-center justify-between'>
                {/* LOGO */}
                <ReloadLink to='/'>
                    <img src="https://i.ibb.co/3yqsRH81/Screenshot-2025-03-07-222847.png" alt="airbnb" className='w-[67%]' />
                </ReloadLink>
                {/* HOME/EXP */}
                <div className='flex gap-9 text-[17px] text-[#6a6a6a] justify-center flex-1 pl-32'>
                    <button onClick={hdlClickHome} className={`${showEXP === false ? 'text-[#222222] strong' : ""}`}>Homes</button>
                    <button onClick={hdlClickEXP} className={`${showEXP === true ? 'text-[#222222] strong' : ""}`}>Experiences</button>
                </div>
                {/* USER Nav */}
                <div className='flex gap-5 text-[14px] flex-wrap items-center'>
                    <ReloadLink to='/host/homes'>Airbnb your home</ReloadLink>
                    <button>
                        <Globe className='h-[18px]' />
                    </button>
                    {/* USER SignupLogin */}
                    <UserBTN />
                </div>
            </div>
            {
                showEXP === false ? <HomeNav /> : <EXPNav />
            }
        </div>
    )
}

export default MainNavBar