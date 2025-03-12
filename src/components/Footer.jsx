import React, { useState } from "react";

function Footer() {
    const [isOpen, setIsOpen] = useState(false); // State สำหรับควบคุมการเปิด/ปิด Modal

    // ฟังก์ชันเปิด Modal
    const handleOpen = () => {
        setIsOpen(true);
    };

    // ฟังก์ชันปิด Modal
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Footer */}
            <div className="px-[40px] py-6 flex justify-between items-center text-[#222222] text-[14px] border-t-[1px] border-gray-300">
                <span>© 2025 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</span>
                <div className="flex items-center gap-4">
                    <span className="cursor-pointer hover:underline">English (GB)</span>
                    <span className="cursor-pointer hover:underline">£ GBP</span>
                    <button
                        onClick={handleOpen}
                        className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Support & resources
                    </button>
                </div>
            </div>

            {/* Bottom Modal */}
            {isOpen && (
                <div className="fixed inset-x-0 bottom-0 bg-white border-t border-gray-300 z-[1000]">
                    {/* Close Button */}
                    <div className="flex justify-between items-center px-[40px] py-[20px] border-b border-gray-300">
                        <button
                            onClick={handleClose}
                            className="text-xl text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-3 gap-6 px-[40px] py-[20px]">
                        {/* Support Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li className="hover:underline cursor-pointer">Help Centre</li>
                                <li className="hover:underline cursor-pointer">Get help with a safety issue</li>
                                <li className="hover:underline cursor-pointer">AirCover</li>
                                <li className="hover:underline cursor-pointer">Anti-discrimination</li>
                                <li className="hover:underline cursor-pointer">Disability support</li>
                                <li className="hover:underline cursor-pointer">Cancellation options</li>
                                <li className="hover:underline cursor-pointer">Report neighbourhood concern</li>
                            </ul>
                        </div>

                        {/* Hosting Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Hosting</h3>
                            <ul className="space-y-2">
                                <li className="hover:underline cursor-pointer">Airbnb your home</li>
                                <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
                                <li className="hover:underline cursor-pointer">Hosting resources</li>
                                <li className="hover:underline cursor-pointer">Community forum</li>
                                <li className="hover:underline cursor-pointer">Hosting responsibly</li>
                                <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
                                <li className="hover:underline cursor-pointer">Find a co-host</li>
                            </ul>
                        </div>

                        {/* Airbnb Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Airbnb</h3>
                            <ul className="space-y-2">
                                <li className="hover:underline cursor-pointer">Newsroom</li>
                                <li className="hover:underline cursor-pointer">New features</li>
                                <li className="hover:underline cursor-pointer">Careers</li>
                                <li className="hover:underline cursor-pointer">Investors</li>
                                <li className="hover:underline cursor-pointer">Gift cards</li>
                                <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;
