import React from 'react'
import useAmenitiesStore from '../../store/AmenitiesStore'
import { useAuth } from '@clerk/clerk-react'

function AllAmenities() {
    const actionAllGetAmenities = useAmenitiesStore(state => state.actionAllGetAmenities)
    const allAmenities = useAmenitiesStore(state => state.allAmenities)
    const { getToken } = useAuth()
    useEffect(() => {
        const fetchAllAmenities = async () => {
            const token = await getToken()
            actionAllGetAmenities(token)
        }
        fetchAllAmenities()
    }, [])
    console.log('allAmenities', allAmenities);
    return (
        <div>AllAmenities</div>
    )
}

export default AllAmenities