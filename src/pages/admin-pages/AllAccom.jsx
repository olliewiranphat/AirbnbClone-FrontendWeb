import React, { useEffect } from "react";
import useAdminStore from "../../store/AdminStore";
import AccomITEMAdmin from "../../components/admin-page/AccomITEMAdmin";
import { useAuth } from "@clerk/clerk-react";


function AllAccom() {
  const { getToken } = useAuth()
  const actionGetAccomAmen = useAdminStore(state => state.actionGetAccomAmen)
  const allAccomAmen = useAdminStore(state => state.allAccomAmen)
  useEffect(() => {
    const fetchAccomAmen = async () => {
      const token = await getToken()
      actionGetAccomAmen(token)
    }
    fetchAccomAmen()
  }, [])
  console.log('allAccomAmen', allAccomAmen);




  return (
    <div className="p-4 mr-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">All Accommodations</h2>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Address</th>
              <th className="p-4">Price/Night</th>
              <th className="p-4">Available</th>
              <th className="p-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {allAccomAmen?.length > 0 && allAccomAmen.map((accom, inx) => (
              <AccomITEMAdmin key={inx} accom={accom} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAccom;
