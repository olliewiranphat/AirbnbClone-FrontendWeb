import React, { useState } from "react";
import AirbnbLOGO from "../home-page/main-navbar/AirbnbLOGO";
import ReloadLink from "../../utils/ReloadLink";
import { HouseIcon } from "./IndexIcon";

function SwichHostNav() {
    
  return (
    <div className=" pb-6 border-b-[1px]  flex-wrap bg-white ">
      <div className="w-full flex justify-between items-center py-4 px-6  relative">
      
        {/* LOGO */}
        <AirbnbLOGO />
        {/* Setup*/}
        <div className="flex justify-center items-center gap-2 pt-4">
            <ReloadLink to='/host-center/host/accommodations'
            className="bg-[#FF385C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#dd1062]">Stayzy Setup</ReloadLink>
        </div>
      </div>

    </div>
  );
}

export default SwichHostNav;
