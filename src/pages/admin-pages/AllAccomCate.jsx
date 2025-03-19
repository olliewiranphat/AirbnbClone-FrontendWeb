import React from 'react'
import useAccomCateStore from '../../store/AccomCateStore'
import { useAuth } from '@clerk/clerk-react'

function AllAccomCate() {
    const actionGetAllAccomCate = useAccomCateStore(state => state.actionGetAllAccomCate)
    const allAccomCate = useAccomCateStore(state => state.allAccomCate)
    const { getToken } = useAuth()
    useEffect(() => {
        const fetchAllCate = async () => {
            const token = await getToken()
            actionGetAllAccomCate(token)
        }
        fetchAllCate()
    }, [])
    console.log('allAccomCate', allAccomCate);
    return (
        <div>AllAccomCate</div>
    )
}

export default AllAccomCate