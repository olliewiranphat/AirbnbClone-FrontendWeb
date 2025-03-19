import { SignInButton, useAuth, useUser } from "@clerk/clerk-react"
<<<<<<< HEAD
import { useNavigate } from "react-router"
import useUserStore from "../store/UserStore"
import { useEffect } from "react"
import ReloadLink from "../utils/ReloadLink"
=======
import { Loader2 } from "lucide-react"
import { Link } from "react-router"
>>>>>>> bc1d0332aa4ff020eee44c83a3b1eae848f43ad0


function ProtectRoutes({ el, allows }) {

    const userData = useUserStore(state => state.userData) //use Database Store instead of Clerk

<<<<<<< HEAD
    ///// CLERK : 
    // const { user } = useUser()
    // console.log('user', user);
    // const role = user?.publicMetadata.role
=======
    // const role = "ADMIN"
    
>>>>>>> bc1d0332aa4ff020eee44c83a3b1eae848f43ad0
    // // console.log('role', role);
    

    // const { isSignedIn, isLoaded } = useAuth()
    // if (!isLoaded) {
    //     return <Loader className='m-auto mt-[22%] animate-spin text-gray-400 font-semibold' />
    // }
    // // if (!isSignedIn) {
    // //     return (
    // //         <SignInButton mode='madal'>
    // //         </SignInButton >
    // //     )
    // // }

<<<<<<< HEAD
=======
    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) {
        return <Loader2 className='m-auto mt-[22%] animate-spin text-gray-400 font-semibold' />
    }
>>>>>>> bc1d0332aa4ff020eee44c83a3b1eae848f43ad0


    if (!allows.includes(userData?.role)) {
        return (
<<<<<<< HEAD
            <div className='flex flex-col gap-2 m-auPto mt-[20%]'>
=======
            <SignInButton mode='madal'>
            </SignInButton >
        )
    }
    const role = user?.publicMetadata.role //host
    if (!allows.includes(role)) {
        return (
            <div className='flex flex-col gap-2 m-auto mt-[20%]'>
>>>>>>> bc1d0332aa4ff020eee44c83a3b1eae848f43ad0
                <span className="font-semibold">Access Denied!!</span>
                <ReloadLink to='/' className='py-2 px-4 rounded-md bg-[#FF385C] text-white hover:font-semibold hover:bg-[#dd1062]'>Go to Home</ReloadLink>
            </div>
        )
    }

    return el

}

export default ProtectRoutes