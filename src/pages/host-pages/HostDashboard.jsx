import React from 'react'
import HostNav from '../../components/homehost-page/SwichHost/HostNav'
import { useState } from "react";
import { FileCheck2,Headset } from "lucide-react";
function HostDashboard() {
    const [activeTab, setActiveTab] = useState("Checking out");
    const [selectedMonth, setSelectedMonth] = useState("January");

    const months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October",
      "November", "December"];
    const monthlyTotal = {
      January: "฿ 1200.00",
      February: "฿ 800.00",
      March: "฿ 952.00",
      April: "฿ 1400.00",
      May: "฿ 2100.00",
      June: "฿ 0.00",
      July: "฿ 0.00",
      August: "฿ 0.00",
      September: "฿ 0.00",
      October: "฿ 0.00",
      November: "฿ 0.00",
      December: "฿ 0.00"
    };
    const detailsData = [
      { title: "Gross Earnings", value: "฿ 5550.00" },
      { title: "Adjustments", value: "฿ 1000.00" },
      { title: "Stayzy Service Fee", value: "฿ 200.00" },
      { title: "Tax Withheld", value: "฿ 77.00" },
      { title: "Total", value: "฿ 1527.00" }
    ];

    const tabs = [
        "Checking out",
        "Currently hosting",
        "Arriving soon",
        "Upcoming",
        "Pending review",
      ];
    return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-5 mb-20 ">
      {/* nav */}
      <div>
      <HostNav/>
    </div>

      <div className="max-w-screen-xl w-full mx-auto px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome Host, </h1>
          <button className="border px-4 py-2 rounded-lg text-sm">
            Complete your listings
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

{/*  Total Month Section */}
<div className="bg-white rounded-lg shadow-sm p-6 h-full">
  <h2 className="text-xl font-bold mb-6">Monthly Total</h2>
  <p className="text-lg font-semibold mb-4">
    Selected Month: <span className="text-pink-600">{selectedMonth}</span>
  </p>
  <p className="text-2xl text-pink-600 font-bold mb-6">
    Total: {monthlyTotal[selectedMonth]}
  </p>
  <div className="grid grid-cols-3 gap-4">
    {months.map((month) => (
      <button
        key={month}
        onClick={() => setSelectedMonth(month)}
        className={`px-4 py-2 rounded-full font-semibold text-sm ${
          selectedMonth === month
            ? "bg-gray-900 text-white shadow-md"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {month}
      </button>
    ))}
  </div>
</div>
{/* Right: Year-to-Date Details */}
<div className="bg-white rounded-lg shadow-sm p-6 h-full">
  <h2 className="text-xl font-bold mb-4">Year-to-Date Details</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border rounded-lg shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left text-sm font-bold">Detail</th>
          <th className="p-4 text-right text-sm font-bold">Amount</th>
        </tr>
      </thead>
      <tbody>
        {detailsData.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="p-4 text-sm">{item.title}</td>
            <td className="p-4 text-sm text-right text-pink-600">
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
</div>

{/* Reservation Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Your reservations</h2>
          <a href="#" className="text-sm underline">
            All reservations (0)
          </a>
        </div>

        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border rounded-3xl text-sm ${
                activeTab === tab ? "border-black border-2" : "border-gray-300"
              }`}
            >
              {tab} (0)
            </button>
          ))}
        </div>

        <div className="bg-gray-100 p-8 rounded-lg flex flex-col items-center">
          <span className="text-3xl">
            <FileCheck2 />
          </span>
          <p className="text-sm mt-2">
            You currently don’t have any {activeTab.toLowerCase()} guests.
          </p>
        </div>

          {/* Help Buttons Container */}
        <div  className="w-full max-w-screen-xl mx-auto  py-10 ">
          <h2 className="text-2xl font-bold mb-6">We’re here to help</h2>
        
        
        <div className="border w-xl rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition cursor-pointer">
          <span className="text-3xl"><Headset /></span> 
          <div>
            <h3 className="font-bold">Contact specialized support</h3>
            <p className="text-gray-600 text-sm">
              As a new Host, you get one-tap access to a specially trained support team.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostDashboard