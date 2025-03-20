import React, { useEffect, useState } from "react";
import useAdminStore from "../../store/useAdminStore";
import { useAuth } from '@clerk/clerk-react'


function AllUsers() {
  const { getToken } = useAuth()
  const getAllUser = useAdminStore(state => state.actionGetAllUser)
  const [allUsers, setAllUsers] = useState([])


  const fetchUser = async () => {
    try {
      const Token = await getToken()
      const res = await getAllUser(Token)
      setAllUsers(res)
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    }
  }

  console.log('allUsers', allUsers)


  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <div className="p-4 mr-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
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
              <th className="p-4">Status</th>
              <th className="p-4">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user,index) => (
              <tr key={user.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{index+1}</td>
                <td className="p-4 font-semibold">{user.Image}</td>
                <td className="p-4 font-semibold">{user.fullName}</td>
                <td className="p-4 text-blue-600 underline">{user.email}</td>
                <td className="p-4">{user.phoneNumber}</td>
                <td className="p-4">{user.address}</td>
                <td className="p-4">{user.status}</td>
                <td className="p-4">{user.createAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
