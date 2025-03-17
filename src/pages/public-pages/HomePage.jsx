import React from 'react'
import AccomLIST from '../../components/home-page/accommodation/AccomLIST'
import Inspiration from '../../components/home-page/inspiration/Inspiration'
import MainIcons from '../../components/home-page/MainIcons'
import { useUser } from '@clerk/clerk-react'
import useUserStore from '../../store/UserStore'



function HomePage() {
    const { user } = useUser()
    // console.log('user.publicMetadata.role', user?.publicMetadata.role);

    const { getToken } = useAuth()
    const actionGetMyAccount = useUserStore(state => state.actionGetMyAccount)
    useEffect(() => {
        const fetchUserDataDB = async () => {
            const token = await getToken()
            console.log('token', token);
            try {
                actionGetMyAccount(token) //API DB
            } catch (error) {
                console.log("actionGetMyAccount, ERROR", error);
            }
        }
        fetchUserDataDB()
    }, [])
    const userData = useUserStore(state => state.userData)
    console.log('userData', userData);

    return (
        <>
            {/* <MainIcons /> */}
            <AccomLIST />
            <Inspiration />
        </>
    )
}

export default HomePage