import React, { useEffect } from "react";
import useAdminStore from "../../store/AdminStore";
import { useAuth } from "@clerk/clerk-react";
import UserItem from "../../components/admin-page/UserItem";



function AllUsers() {
  const actionGetAllUsers = useAdminStore(state => state.actionGetAllUsers)
  const allUsers = useAdminStore(state => state.allUsers)
  const { getToken } = useAuth()
  useEffect(() => {
    const fetchAllUsers = async () => {
      const token = await getToken()
      actionGetAllUsers(token)
    }
    fetchAllUsers()
  }, [])
  console.log('allUsers', allUsers);



  return (
    <div className="p-4 mr-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Full Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone Number</th>
              <th className="p-4">Address</th>
              <th className="p-4">Status</th>
              <th className="p-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 && allUsers.map((user) => (
              <UserItem key={user.userID} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
