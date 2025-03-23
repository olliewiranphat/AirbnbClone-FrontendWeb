import React, { useEffect } from 'react'
import AccomLIST from '../../components/home-page/accommodation/AccomLIST'
import Inspiration from '../../components/home-page/inspiration/Inspiration'
import MainIcons from '../../components/home-page/MainIcons'
import { useAuth, useUser } from '@clerk/clerk-react'
import useUserStore from '../../store/UserStore'
import { useNavigate } from 'react-router'
import useAdminStore from '../../store/AdminStore'



function HomePage() {
    const { getToken, isSignedIn } = useAuth()
    const actionGetMyAccount = useUserStore(state => state.actionGetMyAccount)
    const actionGetAllAccommodations = useAdminStore(state => state.actionGetAllAccommodations)
    const allAccommodatons = useAdminStore(state => state.allAccommodatons)
    // console.log('allAccommodatons', allAccommodatons);
    const userData = useUserStore(state => state.userData)
    // console.log('.role', userData?.role);

    useEffect(() => {
        const fetchData = async () => {
            actionGetAllAccommodations()
            if (isSignedIn) {
                const token = await getToken()
                actionGetMyAccount(token)
            }
        }
        fetchData()
    }, [isSignedIn, getToken, actionGetMyAccount, actionGetAllAccommodations]); // ✅ เพิ่ม `isSignedIn` ใน Dependency


    return (
        <>
            {
                allAccommodatons?.length > 0 ? (<AccomLIST allAccommodatons={allAccommodatons} />) : (<div className='px-[40px] py-6 m-auto'>No Accommodation Data yet!</div>)
            }
            <Inspiration />
        </>
    )
}

export default HomePage