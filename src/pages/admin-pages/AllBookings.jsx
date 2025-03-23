import React from 'react'
import useAdminStore from '../../store/AdminStore'

function AllBookings() {
    // const actionGetAllBookings = useAdminStore(state => state.actionGetAllBookings)
    // const allBookings = useAdminStore(state => state.allBookings)
    // const { getToken } = useAuth()
    // // useEffect(() => {
    // //     const fetchAllBookings = async () => {
    // //         const token = await getToken()
    // //         actionGetAllBookings(token)
    // //     }
    // //     fetchAllBookings()
    // // }, [])
    // console.log('allBookings', allBookings);
    return (
        <div className="p-4 mr-4 mt-[1%]">
            <h2 className="text-2xl font-bold mb-4">All Booking</h2>
            <div className="overflow-auto rounded-lg shadow">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">Image</th>
                            <th className="p-4">Full Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Phone Number</th>
                            <th className="p-4">Address</th>
                            <th className="p-4">Country</th>
                            <th className="p-4">Created At</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {allHosts?.length > 0 && allHosts?.map((host, index) => (
                            <tr key={host.id} className="border-t hover:bg-gray-100">
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4 w-[20px] h-[20px]">
                                    <img src={host.imageUrl} alt="imageUrl" className="w-full h-full object-cover" />
                                </td>
                                <td className="p-4 font-semibold">{host.fullName}</td>
                                <td className="p-4 text-blue-600 underline">{host.email}</td>
                                <td className="p-4">{host.phoneNumber}</td>
                                <td className="p-4">{host.address}</td>
                                <td className="p-4">{host.status}</td>
                                <td className="p-4">{host.createAt}</td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
            </div>
        </div>
    );
}

export default AllBookings