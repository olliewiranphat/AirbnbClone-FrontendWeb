import React, { useState } from "react";
import AirbnbLOGO from "../home-page/main-navbar/AirbnbLOGO";
import ReloadLink from "../../utils/ReloadLink";
import { HousePlusIcon, Loader } from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { updateToHOST } from "../../api-server/hostController";
import useUserStore from "../../store/UserStore";
import { useNavigate } from "react-router";

function SwichHostNav() {
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate()
  const actionGetMyAccount = useUserStore(state => state.actionGetMyAccount)

  const { getToken } = useAuth()
  const hdlChangeToHOST = async () => {
    setLoading(true)
    try {
      const token = await getToken()
      // console.log('token', token);
      const updateStatusUserHOST = await updateToHOST(token, "HOST")
      // console.log('updateStatusUserHOST', updateStatusUserHOST);
      actionGetMyAccount(token) //ROLE=HOST
      navigate('/host-center') //ProtectRoute CHECKUP
      setLoading(false)
    } catch (error) {
      console.log("UpdateHOST, ERROR", error);

    }
  }

  return (
    <div className="flex justify-between items-center px-[40px] w-full h-[80px] relative">
      {/* LOGO */}

      <AirbnbLOGO />


      {/* Setup*/}
      <div className="header flex gap-6 justify-end items-center ">
        <span className="">Ready to Stayzy it?</span>

        {/* UPDATE STATUS to HOST */}

        <button onClick={hdlChangeToHOST}
          className=" bg-[#FF385C]  flex items-center justify-center gap-3 cursor-pointer py-2 px-4 rounded-md w-[200px] h-[48px] hover:font-semibold hover:bg-[#dd1062]  hover:duration-300">
          <HousePlusIcon className='text-white' />
          <span className="text-white">Stayzy Setup</span>
        </button>
      </div>
      {
        loading && (
          <div class="bg-[rgba(255,255,255,0.8)] h-screen w-screen absolute top-0 flex items-center">
            <Loader className="animate-spin ml-[45%]" />
          </div>
        )
      }
    </div>
  );
}

export default SwichHostNav;
