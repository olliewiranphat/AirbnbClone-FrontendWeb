import React from 'react'
import { useState } from "react";
import AirbnbLOGO from '../../components/home-page/main-navbar/AirbnbLOGO';
import { AlignJustify, CircleUserRound } from "lucide-react";
import UserBTN from '../../components/home-page/user/UserBTN';
import ReloadLink from '../../utils/ReloadLink';

function Messages() {
  const [messages, setMessages] = useState([
    {
      sender: "support",
      text: "Hi! How can we assist you today?",
    },
  ]);

  return (
        <div className="flex flex-col h-screen bg-gray-100">
        {/* Navbar */}
        <div className="w-full h-25 bg-white p-4 border-b flex justify-between items-center  fixed top-0 left-0 right-0 z-50">
        <div>
            <AirbnbLOGO />
        </div>
        <div className="flex items-center gap-4">
        <ReloadLink to='/host/homes' className="text-sm px-3 py-1 text-gray-700 hover:rounded-3xl hover:h-8  hover:bg-gray-200 cursor-pointer">
              Stayzy your home
            </ReloadLink>
          <div>
            <UserBTN />
          </div>
        </div>
        </div>

    <div className="flex flex-1 mt-25">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-4 border-r flex flex-col">
        <h2 className="text-xl font-semibold">Messages</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border rounded-lg"
          />  
        </div>
        <div className="mt-6 space-y-2 flex-1 overflow-y-auto">
          <div className="p-3 bg-gray-200 rounded-lg cursor-pointer">Airbnb Support</div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-white border-b flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Stayzy Support</h2>
          </div>
          <span className="cursor-pointer">⋮</span>
        </div>

        <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "support" ? "bg-gray-200 self-start" : "bg-blue-500 text-white self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="bg-[#222222] text-white px-4 py-2 rounded-lg hover:bg-black cursor-pointer">Send</button>
        </div>
      </div>
    </div>
  </div>
  );
}


export default Messages