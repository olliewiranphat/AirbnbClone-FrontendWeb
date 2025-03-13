import React from "react";

const accommodations = [
  {
    id: 1,
    title: "Cozy Beach House",
    description: "A lovely house near the beach with great views.",
    addressDetail: "123 Ocean Drive",
    city: "Miami",
    country: "USA",
    pricePerNight: "$150",
    bedrooms: 2,
    bathrooms: 1,
    available: "Yes",
    type: "Entire Home",
  },
  {
    id: 2,
    title: "Modern Apartment",
    description: "A stylish apartment in the city center.",
    addressDetail: "456 Downtown St.",
    city: "New York",
    country: "USA",
    pricePerNight: "$200",
    bedrooms: 1,
    bathrooms: 1,
    available: "No",
    type: "Apartment",
  },
];

function AllAccom() {
  return (
    <div className="p-6">
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
              <th className="p-4">Bedrooms</th>
              <th className="p-4">Bathrooms</th>
              <th className="p-4">Available</th>
              <th className="p-4">Type</th>
            </tr>
          </thead>
          <tbody>
            {accommodations.map((acc) => (
              <tr key={acc.id} className="border-t hover:bg-gray-100">
                <td className="p-4">{acc.id}</td>
                <td className="p-4 font-semibold">{acc.title}</td>
                <td className="p-4">{acc.description}</td>
                <td className="p-4">{acc.city}</td>
                <td className="p-4">{acc.country}</td>
                <td className="p-4 font-bold text-green-600">{acc.pricePerNight}</td>
                <td className="p-4">{acc.bedrooms}</td>
                <td className="p-4">{acc.bathrooms}</td>
                <td className={`p-4 font-semibold ${acc.available === "Yes" ? "text-green-500" : "text-red-500"}`}>
                  {acc.available}
                </td>
                <td className="p-4">{acc.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllAccom;
