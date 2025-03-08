import { SignInButton, useAuth, useUser } from "@clerk/clerk-react"
import { Loader } from "lucide"


function ProtectRoutes({ el, allows }) {

    const { user } = useUser()
    // console.log('user', user);

    const role = user?.publicMetadata.role
    // console.log('role', role);


    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) {
        return <Loader className='m-auto mt-[22%] animate-spin text-gray-400 font-semibold' />
    }

    if (!isSignedIn) {
        return (
            <SignInButton mode='madal'>
            </SignInButton >
        )
    }

    if (!allows.includes(role)) {
        return (
            <div className='flex flex-col gap-2 m-auto mt-[20%]'>
                <span className="font-semibold">Access Denied!!</span>
                <Link to='/' className='py-2 px-4 rounded-md bg-[#FF385C] text-white hover:font-semibold hover:bg-[#dd1062]'>Go to Home</Link>
            </div>
        )
    }


    return el

}

export default ProtectRoutes