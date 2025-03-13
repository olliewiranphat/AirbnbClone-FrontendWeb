import { BedDouble, LandPlot, SlidersHorizontal, TicketPlus } from "lucide-react";
import React from "react";

function MainIcons() {
    return (
        <div className="px-[40px] h-[120px] bg-white flex items-center justify-between text-[#6a6a6a] mb-4">
            {/* Carousel Section */}
            <div className="flex gap-12">
                {[
                    { icon: <LandPlot />, label: "Amazing views" },
                    { icon: <TicketPlus />, label: "Icons" },
                    { icon: <LandPlot />, label: "Beachfront" },
                    { icon: <LandPlot />, label: "OMG!" },
                    { icon: <BedDouble />, label: "Rooms" },
                    { icon: <LandPlot />, label: "Treehouses" },
                    { icon: <LandPlot />, label: "Design" },
                    { icon: <LandPlot />, label: "Castles" },
                    { icon: <LandPlot />, label: "Farms" },
                    { icon: <LandPlot />, label: "Cabins" },
                    { icon: <LandPlot />, label: "Tiny homes" },
                    { icon: <LandPlot />, label: "Amazing pools" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-1 py-3 items-center border-b-2 border-transparent hover:text-black hover:border-gray-300 hover:border-b-2 hover:duration-300 cursor-pointer"
                    >
                        {item.icon}
                        <span className="text-[12px] font-semibold">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Filters and Toggle Section */}
            <div className="flex items-center gap-4">
                {/* Arrow Icon */}
                <div className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-600"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Filters Button */}
                <div className="border border-gray-300 py-3 px-4 rounded-xl flex items-center gap-2 cursor-pointer">
                    <SlidersHorizontal />
                    <span className="text-[12px]">Filters</span>
                </div>

                {/* Display Taxes Toggle */}
                <div className="border border-gray-300 py-3 px-4 rounded-xl flex items-center gap-2 cursor-pointer">
                    <span className="text-[12px]">Display total before taxes</span>
                    {/* Toggle Switch */}
                    <div className="w-[40px] h-[20px] bg-gray-200 rounded-full flex items-center p-[2px] cursor-pointer">
                        {/* Circle */}
                        <div className="w-[16px] h-[16px] bg-white rounded-full shadow-md transform transition-transform"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainIcons;
