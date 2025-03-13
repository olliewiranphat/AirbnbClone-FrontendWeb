import React, { useState } from "react";
import AirbnbLOGO from "../home-page/main-navbar/AirbnbLOGO";
import HostNavProfile from "./HostNavProfile";
import ReloadLink from "../../utils/ReloadLink";


function HostNav() {
    // HomeNav/EXPNav
    const [showEXP, setShowEXP] = useState(false)
    const hdlClickEXP = () => {
        setShowEXP(true)
    }
    const hdlClickHome = () => {
        setShowEXP(false)
    }

    
  return (
    <div className=" pb-6 border-b-[1px] p border-gray-200  flex-wrap bg-white ">
      <div className="h-[80px] px-[40px] py-[15px] flex items-center justify-between">
        {/* LOGO */}
        <AirbnbLOGO/>
        {/* HOME/EXP */}
        <div className='flex gap-9 text-[17px] text-[#6a6a6a] justify-center flex-1 pl-32'>
                    <ReloadLink to='/host-center'
                    onClick={hdlClickHome} className={`${showEXP === false ? 'text-[#222222] strong' : ""}`}>Dashboard</ReloadLink>
                    <ReloadLink to='/host-center/host/accommodations/add'
                    onClick={hdlClickEXP} className={`${showEXP === true ? 'text-[#222222] strong' : ""}`}>Listing</ReloadLink>
                    <button onClick={hdlClickEXP} className={`${showEXP === true ? 'text-[#222222] strong' : ""}`}>Massage</button>
                </div>
        {/* USER Nav */}
        <HostNavProfile/>
      </div>

    </div>
  );
}

export default HostNav;
