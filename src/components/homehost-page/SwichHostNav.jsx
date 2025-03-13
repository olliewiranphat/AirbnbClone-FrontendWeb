import React, { useState } from "react";
import AirbnbLOGO from "../home-page/main-navbar/AirbnbLOGO";
import ReloadLink from "../../utils/ReloadLink";
import { HouseIcon } from "./IndexIcon";

function SwichHostNav() {
    
  return (
    <div className=" pb-6 border-b-[1px] p border-gray-200  flex-wrap bg-white ">
      <div className="h-[80px] px-[40px] py-[15px] flex items-center justify-between">
        {/* LOGO */}
        <AirbnbLOGO />
        {/* Setup*/}
        <div className="flex gap-2">
            <button className="py-2 px-4 rounded-md  hover:font-semibold hover:bg-slate-100">Ready to Stayzy it?</button>
            <ReloadLink to='/host-center/host/accommodations'
            className="py-2 px-4 rounded-md bg-[#FF385C] hover:font-semibold text-white hover:bg-[#dd1062]"><span className="flex w-10 h-10"><HouseIcon /></span>Stayzy Setup</ReloadLink> 
        </div>
      </div>

    </div>
  );
}

export default SwichHostNav;
