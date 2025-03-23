import React, { useState } from "react";
import ContentFooter from "./ContentFooter";
import { useAuth, useUser } from "@clerk/clerk-react";

function Footer() {
    const { isSignedIn } = useAuth()
    // console.log(isSignedIn, isSignedIn);

    const [isOpen, setIsOpen] = useState(false); // State สำหรับควบคุมการเปิด/ปิด Modal

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Footer */}
            <div className="px-[40px] py-6 flex justify-between items-center text-[#222222] text-[14px] border-t-[1px] border-gray-300">
                <span>© 2025 Stayzy, Inc. · Privacy · Terms · Sitemap · Company details</span>
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
                <div className="fixed inset-x-0 bottom-0 bg-white border-t border-grey-300 z-[1000] rounded-t-[30px] shadow-lg">
                    {/* Close Button */}
                    <div className="flex justify-between items-center px-[40px] py-[20px] ">
                        <button
                            onClick={handleClose}
                            className="text-xl text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>
                    <ContentFooter />
                </div>
            )}
        </>
    );
}

export default Footer;
