import React, { useState } from "react";
import AirbnbLOGO from "../../home-page/main-navbar/AirbnbLOGO";
import HostNavProfile from "./HostNavProfile";
import ReloadLink from "../../../utils/ReloadLink";
import { Link } from "react-router";


function HostNav() {
  // Dashboard, Listing ,Massage
  const [activeTab, setActiveTab] = useState("Dashboard");
  const hdlTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" pb-6 border-b-[1px] p border-gray-200  flex-wrap bg-white ">
      <div className="h-[80px] px-[40px] py-[15px] flex items-center justify-between">
        {/* LOGO */}
        <AirbnbLOGO />
        {/* Nav */}
        <div className='flex gap-9 text-[17px] text-[#6a6a6a] justify-center flex-1 pl-32'>
          <Link to="/host-center"
            onClick={() => hdlTabClick("Dashboard")} className={`${activeTab === "Dashboard" ? 'text-[#222222] strong' : "text-[#6a6a6a]"}`}>Dashboard</Link>
          <Link to='/host-center/host/accommodations'
            onClick={() => hdlTabClick("Listing")} className={`${activeTab === "Listing" ? 'text-[#222222] strong' : "text-[#6a6a6a]"}`}>Listing</Link>
          <ReloadLink to="/guest/messages"
            className='hover:text-[#222222] hover:duration-300 cursor-pointer'>Massage
          </ReloadLink>
        </div>
        {/* USER Nav */}
        <HostNavProfile />
      </div>

    </div>
  );
}

export default HostNav;
