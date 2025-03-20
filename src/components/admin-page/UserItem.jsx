import React from 'react'

function UserItem({ user }) {

    const craetedAtDate = new Date(user.createAt).toLocaleDateString("en-GB") //"DD/MM/YYYY"
    return (
        <tr key={user.userID} className="border-t hover:bg-gray-100">
            <td className="p-4">{user.userID}</td>
            <td className="p-4 font-semibold">{user.fullName}</td>
            <td className="p-4 text-blue-600 underline">{user.email}</td>
            <td className="p-4">{user.phoneNumber}</td>
            <td className="p-4">{user.address}</td>
            <td className="p-4">{user.status}</td>
            <td className="p-4">{craetedAtDate}</td>
        </tr>
    )
}

export default UserItem