import { useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import useAdminStore from "../../store/useAdminStore";


function AllAccom() {
  const {getToken} = useAuth()
    const getAllAccom = useAdminStore(state => state.actionGetAllAccomodation)
    const [allAccomodation, setAllAccomodation] = useState([])

  const fetchAllAccomodation = async () => {
    try {
        const Token = await getToken()
        const res = await getAllAccom(Token)
        setAllAccomodation(res)
    } catch (error) {
        console.log('error', error)
    }
}

console.log('allAccomodation', allAccomodation)

useEffect(() => {
  fetchAllAccomodation()
}, [])



  return (
    <div className="p-4 mr-4">
      <h2 className="text-2xl font-bold mb-4">All Accommodations</h2>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Description</th>
              <th className="p-4">City</th>
              <th className="p-4">Country</th>
              <th className="p-4">Price/Night</th>
              <th className="p-4">Address</th>
              <th className="p-4">Bedrooms</th>
              <th className="p-4">Bathrooms</th>
              <th className="p-4">Available</th>
              <th className="p-4">MaxGuest</th>
              <th className="p-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {allAccomodation.map((acc,index) => (
              <tr key={acc.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{index+1}</td>
                <td className="p-4 font-semibold">{acc.title}</td>
                <td className="p-4">{acc.description}</td>
                <td className="p-4">{acc.city}</td>
                <td className="p-4">{acc.country}</td>
                <td className="p-4 font-bold text-green-600">{acc.pricePerNight}</td>
                <td className="p-4">{acc.addressDetail}</td>
                <td className="p-4">{acc.NumBedrooms}</td>
                <td className="p-4">{acc.NumBathrooms}</td>
                <td className="p-4"> {acc.availQTY}</td>
                <td className="p-4">{acc.MaxGuests}</td>
                <td className="p-4">{acc.typeOfAccom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAccom;
