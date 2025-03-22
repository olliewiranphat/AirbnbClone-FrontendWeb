import React, { useState } from "react";
import AirbnbLOGO from "../../home-page/main-navbar/AirbnbLOGO";
import ReloadLink from "../../../utils/ReloadLink";
import { HouseIcon } from "../IndexIcon";
import { useAuth, useUser } from "@clerk/clerk-react";
import { setupRolehost } from "../../../api/hostRole";
import { useNavigate } from "react-router";
// import { Loader2 } from "lucide-react";


function SwichHostNav() {
  const {getToken}=useAuth()
  const {user}=useUser()
  const navigate =useNavigate()
  const [loading,setLoading]=useState(false)
  console.log(user);
    const hdltoHost = async() => {
      setLoading(true)
          try {
            const token = await getToken()
            console.log(token);
            const res =await setupRolehost(token,'HOST')
            console.log(res);
            navigate('/host-center')
          } catch (error) {
            console.log(error);
          }
    }
  return (
    <div className=" pb-6 border-b-[1px]  flex-wrap bg-white ">
      <div className="w-full flex justify-between items-center py-4 px-6  relative">
      
        {/* LOGO */}
        <AirbnbLOGO />
        {/* Setup*/}
        <button onClick={hdltoHost}
         className="bg-[#FF385C] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#dd1062]">
           Stayzy Setup
        </button>
      </div>
      {/* <Loader2/> */}
    </div>
  );
}

export default SwichHostNav;
