import React, { useState } from 'react';
import HomeNav from './HomeNav';
import EXPNav from './EXPNav';
import UserNav from './UserNav';
import AirbnbLOGO from './AirbnbLOGO';

function MainNavBar() {
    // HomeNav/EXPNav
    const [showEXP, setShowEXP] = useState(false);
    const hdlClickEXP = () => {
        setShowEXP(true);
    };
    const hdlClickHome = () => {
        setShowEXP(false);
    };

    return (
        <div className="pb-6 border-b-[1px] border-gray-200 bg-white">
            {/* Header Section */}
            <div className="h-[80px] px-[40px] py-[15px] flex items-center justify-between">
                {/* LOGO */}
                <AirbnbLOGO />

                {/* HOME/EXP */}
                <div className="flex gap-9 text-[17px] text-[#6a6a6a] justify-center flex-1 pl-32">
                    <button
                        onClick={hdlClickHome}
                        className={`${
                            showEXP === false ? 'text-[#222222] font-semibold' : ''
                        }`}
                    >
                        Homes
                    </button>
                    <button
                        onClick={hdlClickEXP}
                        className={`${
                            showEXP === true ? 'text-[#222222] font-semibold' : ''
                        }`}
                    >
                        Experiences
                    </button>
                </div>

                {/* USER Nav */}
                <UserNav />
            </div>

            {/* Content Section */}
            <div className="mt-1 mb-2">
                {showEXP === false ? <HomeNav /> : <EXPNav />}
            </div>
        </div>
    );
}

export default MainNavBar;
