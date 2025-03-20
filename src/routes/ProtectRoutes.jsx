import { useAuth, useUser } from "@clerk/clerk-react";
import useUserStore from "../store/UserStore"
import ReloadLink from "../utils/ReloadLink"
import { Loader } from "lucide-react";


function ProtectRoutes({ el, allows }) {

    const userData = useUserStore(state => state.userData) //use Database Store instead of Clerk
    console.log('userData', userData);




    if (!allows.includes(userData?.role)) {
        return (
            <div className='flex flex-col gap-2 m-auPto mt-[20%]'>
                <span className="font-semibold">Access Denied!!</span>
                <ReloadLink to='/' className='py-2 px-4 rounded-md bg-[#FF385C] text-white hover:font-semibold hover:bg-[#dd1062]'>Go to Home</ReloadLink>
            </div>
        )
    }

    return el

}

export default ProtectRoutes