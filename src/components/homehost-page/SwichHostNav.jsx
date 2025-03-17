import React, { useState } from "react";
import AirbnbLOGO from "../home-page/main-navbar/AirbnbLOGO";
import ReloadLink from "../../utils/ReloadLink";
import { Link } from "react-router";
import { HousePlusIcon } from "lucide-react";

function SwichHostNav() {

  return (
    <div className="flex justify-between items-center px-[40px] w-full h-[80px]">
      {/* LOGO */}

      <AirbnbLOGO />


      {/* Setup*/}
      <div className="header flex gap-6 justify-end items-center ">
        <span className="">Ready to Stayzy it?</span>
        {/* HOST SETUP */}
        <ReloadLink to='/host-center/host/accommodations'
          className="flex-wrap py-2 px-4 flex items-center justify-center gap-3 rounded-md bg-[#FF385C] hover:font-semibold hover:bg-[#dd1062] w-[200px] h-[48px] cursor-pointer">
          <HousePlusIcon className='text-white' />
          <span className="text-white">Stayzy Setup</span>
        </ReloadLink>
      </div>


    </div>
  );
}

export default SwichHostNav;
