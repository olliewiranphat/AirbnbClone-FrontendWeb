import React from 'react';
import Swal from 'sweetalert2';
import { SlidersHorizontal } from 'lucide-react';

const FiltersAndToggle = () => {

    return (
            <div className="flex items-center gap-4 ml-8">
    {/* Filters Button */}
    <div
        className="border border-gray-300 py-3 px-4 rounded-xl flex items-center gap-2 cursor-pointer font-sans"
        onClick={() =>
            Swal.fire({
                title: '<h2 class="text-lg font-bold mb-4 font-sans">Filters</h2>',
                html: `
                    <div class="text-left font-sans">
                        <!-- Type of place -->
                        <div class="mb-6">
                            <h3 class="text-base font-semibold mb-3">Type of place</h3>
                            <div class="flex gap-2">
                                ${["Any type", "Room", "Entire home"]
                                    .map(
                                        (type, idx) =>
                                            `<button class="py-2 px-4 rounded-full border border-gray-300 text-sm font-medium ${
                                                idx === 0 ? "bg-black text-white" : "hover:bg-gray-100"
                                            }">${type}</button>`
                                    )
                                    .join("")}
                            </div>
                        </div>

                        <!-- Price range -->
                        <div class="mb-6">
                            <h3 class="text-base font-semibold mb-3">Price range</h3>
                            <p class="text-xs text-gray-500 mb-4">Nightly prices before fees and taxes</p>
                            <input type="range" min="8" max="570" step="1" class="w-full accent-pink-500 mb-2" />
                            <div class="flex justify-between text-sm">
                                <span>£8</span>
                                <span>£570+</span>
                            </div>
                        </div>

                        <!-- Rooms and beds -->
                        <div class="mb-6">
                            <h3 class="text-base font-semibold mb-3">Rooms and beds</h3>
                            ${["Bedrooms", "Beds", "Bathrooms"]
                                .map(
                                    (label) =>
                                        `<div class="flex justify-between items-center mb-4">
                                            <span class="text-sm">${label}</span>
                                            <div class="flex items-center gap-2">
                                                <button class="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-gray-300 text-sm hover:bg-gray-100">−</button>
                                                <span>Any</span>
                                                <button class="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-gray-300 text-sm hover:bg-gray-100">+</button>
                                            </div>
                                        </div>`
                                )
                                .join("")}
                        </div>

                        <!-- Amenities -->
                        <div class="mb-6">
                            <h3 class="text-base font-semibold mb-3">Amenities</h3>
                            <div class="flex flex-wrap gap-2">
                                ${["Wifi", "Kitchen", "Washing machine", "Dryer", "Air conditioning", "Heating"]
                                    .map(
                                        (amenity) =>
                                            `<button class="py-2 px-4 rounded-full border border-gray-300 text-sm hover:bg-gray-100">${amenity}</button>`
                                    )
                                    .join("")}
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="flex justify-between mt-6">
                            <button class="text-gray-500 text-sm cursor-pointer">Clear all</button>
                            <button class="bg-black text-white py-2 px-4 rounded-full text-sm cursor-pointer">Show 602 places</button>
                        </div>
                    </div>`,
                showCloseButton: true,
                showConfirmButton: false,
                width: "600px",
            })
        }
    >
        <SlidersHorizontal />
        <span className="text-[12px]">Filters</span>
    </div>

    {/* Display Taxes Toggle */}
    <div className="border border-gray-300 py-3 px-4 rounded-xl flex items-center gap-2 cursor-pointer font-sans">
        <span className="text-[12px]">Display total before taxes</span>
        {/* Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
                className="
                    w-[40px] h-[20px] bg-gray-200 peer-focus:outline-none 
                    peer-focus:ring-blue rounded-full peer peer-checked:bg-black transition-all duration-[0.4s]
                "
            ></div>
            {/* Circle */}
            <span
                className="
                    absolute top-[2px] left-[2px] w-[16px] h-[16px] 
                    bg-white rounded-full shadow-md transform transition-transform peer-focus:ring-blue
                "
            ></span>
        </label>
    </div>
</div>

    );
};

export default FiltersAndToggle;
