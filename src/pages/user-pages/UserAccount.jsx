import React from "react";
import {
    CameraIcon,
    GlobeAltIcon,
    SunIcon,
    PaperAirplaneIcon,
    BriefcaseIcon,
} from "@heroicons/react/outline";

function UserAccount() {
    return (
        <div
            className="min-h-screen bg-white"
            style={{
                margin: "-24px",
                padding: "64px",
                borderWidth: "0px",
            }}
        >
            {/* Header */}


            {/* Main Content */}
            <div className="max-w-[1360.8px] mx-auto py-[80px] px-[80px]">
                {/* Profile Section */}
                <section className="flex  items-start space-x-[40px]">
                    {/* Profile Picture */}
                    <div className="relative w-[240px] h-[240px] bg-black rounded-full flex items-center justify-center text-white text-[98px] font-bold">
                        W
                        <button className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white border rounded-full px-[12px] py-[6px] text-xs shadow-md flex items-center space-x-1">
                            <CameraIcon className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">Add</span>
                        </button>
                    </div>

                    {/* Profile Info */}
                    <div>
                        <div className="flex-1">
                            <h1 className="text-[32px] font-semibold">Your profile</h1>
                            <p className="text-gray-500 text-sm mt-2">
                                The information you share will be used across Airbnb to help other guests and hosts get to know you.{" "}
                                <a href="#" className="text-blue-500 underline">
                                    Learn more
                                </a>
                            </p>

                            {/* Profile Details */}
                            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[24px] mt-[24px]">
                                {[
                                    { label: "Decade I was born", value: "80s", icon: GlobeAltIcon },
                                    { label: "Where I’ve always wanted to go", value: "5w5", icon: SunIcon },
                                    { label: "Pets", value: "", icon: PaperAirplaneIcon },
                                    { label: "My most useless skill", value: "", icon: BriefcaseIcon },
                                    { label: "I spend too much time", value: "", icon: GlobeAltIcon },
                                    { label: "Languages I speak", value: "", icon: SunIcon },
                                    { label: "Where I live", value: "", icon: PaperAirplaneIcon },
                                    { label: "My work", value: "", icon: BriefcaseIcon },
                                    { label: "My fun fact", value: "", icon: GlobeAltIcon },
                                    { label: "Where I went to school", value: "", icon: SunIcon },
                                    { label: "My favourite song in secondary school", value: "", icon: PaperAirplaneIcon },
                                    { label: "My biography title would be", value: "", icon: BriefcaseIcon },
                                    { label: "I’m obsessed with", value: "", icon: GlobeAltIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-[10px]">
                                        <div className="flex items-center space-x-[12px]">
                                            <item.icon className="w-[24px] h-[24px] text-gray-500" />
                                            <span className="text-sm text-gray-700">{item.label}</span>
                                        </div>
                                        {item.value ? (
                                            <span className="text-sm text-gray-500">{item.value}</span>
                                        ) : (
                                            <button className="text-blue-500 text-sm">Add</button>
                                        )}
                                    </div>
                                ))}
                            </div>



                        </div>



                        {/* About You Section */}
                        <div className="mt-[40px] max-w-[1360.8px]  mx-auto px-[10px]">
                            <h2 className="text-[32px] font-semibold text-gray-800">About you</h2>

                            <div className="mt-[24px]">
                                <textarea
                                    placeholder="Write something fun and punchy."
                                    rows={3}
                                    className="w-full mt-[12px] p-[12px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
                                ></textarea>
                                <button className="mt-[12px] text-sm text-blue-500">Add intro</button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <h2 className="text-[32px] font-semibold text-gray-800">Where you’ve been </h2>
                            {/* Toggle Switch */}
                            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                <input type="checkbox" id="toggle" className="sr-only" />
                                <div className="w-[40px] h-[20px] bg-gray-300 rounded-full relative peer-focus:ring peer-focus:ring-blue-300 peer checked:bg-blue-500 transition">
                                    <div className="absolute left-[2px] top-[2px] w-[16px] h-[16px] bg-white rounded-full transition peer-checked:translate-x-[20px]"></div>
                                </div>
                            </label>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            Choose whether other people can see all the places you've been on Airbnb.
                        </p>

                        {/* Destination Icons */}
                        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[20px] mt-6">
                            {[
                                { shape: "rounded-lg", icon: GlobeAltIcon, label: "Next destination" },
                                { shape: "rounded-full", icon: SunIcon, label: "Next destination" },
                                { shape: "rounded-md", icon: PaperAirplaneIcon, label: "Next destination" },
                                { shape: "rounded-xl", icon: BriefcaseIcon, label: "Next destination" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center justify-center h-[120px] w-[220px] border border-gray-400 ${item.shape} hover:border-black transition`}
                                >
                                    {/* Icon */}
                                    <item.icon className={`w-[40px] h-[40px] text-gray-400`} />
                                    {/* Label */}
                                    <p className="text-sm text-gray-600 mt-2">{item.label}</p>
                                </div>
                            ))}
                        </div>



                        {/* What You're Into Section */}
                        <div className="mt-[40px] max-w-5xl mx-auto px-2">
                            <h2 className="text-[28px] font-semibold text-gray-800">What you're info</h2>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-x-[10px] gap-y-[10px] mt-[15px]">
                                {[
                                    { label: "Architecture", icon: GlobeAltIcon },
                                    { label: "Food", icon: SunIcon },
                                ].map((tag, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm"
                                    >
                                        <tag.icon className="w-5 h-5 text-gray-500" />
                                        <span className="text-sm font-medium text-gray-700">{tag.label}</span>
                                    </div>
                                ))}
                            </div>



                            {/* Edit Interests */}
                            <button className="mt-4 text-sm font-medium text-blue-500 underline">
                                Edit interests
                            </button>


                            {/* Done Button */}
                            <div className="flex justify-end mt-8">
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default UserAccount;
