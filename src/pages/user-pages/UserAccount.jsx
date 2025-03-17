import React, { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import PersonalInfo from "../../components/home-page/user/user-account/PersonalInfo";
import UserImage from "../../components/home-page/user/user-account/UserImage";
import UserInfo from "../../components/home-page/user/user-account/UserInfo";
import ContentFooter from "../../components/ContentFooter";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import InactiveModal from "../../components/home-page/user/user-account/InactiveModal";
import HelpingInform from "../../components/home-page/user/user-account/HelpingInform";
import useUserStore from "../../store/UserStore";

function UserAccount() {
    const { user } = useUser()
    // console.log('user', user);

    const userData = useUserStore(state => state.userData)
    // console.log('userData', userData);
    const userInfo = [
        { label: "Fullname", field: "fullName", value: userData?.fullName || user?.fullName, btn: "Edit" },
        { label: "Email address", field: "email", value: userData?.email || user?.emailAddresses[0].emailAddress, btn: "Edit" },
        { label: "Phone number", field: "phoneNumber", value: userData?.phoneNumber || user?.phoneNumbers[user.phoneNumbers.length - 1].phoneNumber, btn: "Edit" },
        { label: "Address", field: "address", value: userData?.address || "Fill your addresss here", btn: "Edit" },
    ]

    const [showInactiveModal, setShowInactiveModal] = useState(false);


    return (
        <div className="bg-white px-10 py-10">
            <PersonalInfo />

            <div className="max-w-[1360px] mx-auto flex gap-10">
                {/* UserImageUrl */}
                <UserImage />

                {/* Personal Info */}
                <div className="flex-grow">
                    {userInfo.map((item, index) => (
                        <UserInfo item={item} key={index} />))}

                    {/* INACTIVE SECTION */}
                    <div className="mt-8">
                        {/*Inactive Account BTN : OPEN Modal*/}
                        <button
                            className="bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#FF385C]/80 cursor-pointer"
                            onClick={() => setShowInactiveModal(true)}
                        >
                            Inacitive account
                        </button>

                        {/* AnimatePresence ช่วยให้ Modal ค่อยๆ ปิดเมื่อกด Cancel */}
                        <AnimatePresence>
                            {showInactiveModal && (
                                // MODAL
                                <InactiveModal setShowInactiveModal={setShowInactiveModal} />
                            )}
                        </AnimatePresence>
                    </div>

                </div>

                {/* ส่วนช่วยเหลือ */}
                <HelpingInform />
            </div>

            <ContentFooter />
        </div>
    );
}

export default UserAccount;
