import React from 'react'

function AccomITEMAdmin({ accom }) {
    return (
        <tr key={accom.id} className="border-t hover:bg-gray-100">
            <td className="p-4">{accom.accommodationID}</td>
            <td className="p-4 font-semibold">{accom.title}</td>
           
            <td className="p-4 flex flex-col gap-2">
                <span>{accom.addressDetail}</span>
                <span>{accom.city}</span>
                <span>{accom.country}</span>
            </td>
            <td className="p-4 font-bold text-green-600">{accom.pricePerNight}</td>
            <td className="p-4 font-semibold">{accom.NumBedrooms}</td>
            <td className="p-4 font-semibold">{accom.NumBathrooms}</td>
            <td className="p-4 font-semibold">{accom.MaxGuests}</td>

            <td className={`p-4 font-semibold`}>{accom.availQTY} </td>
            <td className="p-4">{accom.typeOfAccom}</td>
        </tr>
    )
}

export default AccomITEMAdmin