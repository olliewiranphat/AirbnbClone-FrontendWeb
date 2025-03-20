import React from 'react'
import useAdminStore from '../../store/AdminStore'

function AllBookings() {
    const actionGetAllBookings = useAdminStore(state => state.actionGetAllBookings)
    const allBookings = useAdminStore(state => state.allBookings)
    const { getToken } = useAuth()
    // useEffect(() => {
    //     const fetchAllBookings = async () => {
    //         const token = await getToken()
    //         actionGetAllBookings(token)
    //     }
    //     fetchAllBookings()
    // }, [])
    console.log('allBookings', allBookings);
    return (
        <div>AllBookings</div>
    )
}

export default AllBookings