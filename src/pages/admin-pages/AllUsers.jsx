import React from "react";

const users = [
  {
    id: 1,
    fullname: "Cy Ganderton",
    email: "cy.ganderton@gmail.com",
    phoneNumber: "089-584-848",
    address: "123 Street, Bangkok",
    country: "Thailand",
    createdAt: "2023-05-10",
  },
  {
    id: 2,
    fullname: "Hart Hagerty",
    email: "hart.h@gmail.com",
    phoneNumber: "098-765-4321",
    address: "456 Avenue, Chiang Mai",
    country: "Thailand",
    createdAt: "2022-11-15",
  },
  {
    id: 3,
    fullname: "Brice Swyre",
    email: "brice.swyre@example.com",
    phoneNumber: "081-234-5678",
    address: "789 Road, Phuket",
    country: "Thailand",
    createdAt: "2021-07-22",
  },
];

function AllUsers() {
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
              <th className="p-4">Country</th>
              <th className="p-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{user.id}</td>
                <td className="p-4 font-semibold">{user.fullname}</td>
                <td className="p-4 text-blue-600 underline">{user.email}</td>
                <td className="p-4">{user.phoneNumber}</td>
                <td className="p-4">{user.address}</td>
                <td className="p-4">{user.country}</td>
                <td className="p-4">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
