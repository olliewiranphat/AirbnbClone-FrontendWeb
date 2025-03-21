import React, { useEffect, useState } from "react";
import { CameraIcon, LockClosedIcon, PencilIcon, EyeIcon } from "@heroicons/react/outline";
import useUserStore from "../../store/useUserStore";
import { useUser, useAuth } from "@clerk/clerk-react";
import AirbnbLOGO from "../../components/home-page/main-navbar/AirbnbLOGO";
import UserNav from "../../components/home-page/main-navbar/UserNav";

import PersonalInfo from "../../components/home-page/user/user-account/PersonalInfo";
import UserImage from "../../components/home-page/user/user-account/UserImage";
import UserInfo from "../../components/home-page/user/user-account/UserInfo";
import ContentFooter from "../../components/ContentFooter";
import { AnimatePresence } from "framer-motion";
import InactiveModal from "../../components/home-page/user/user-account/InactiveModal";
import HelpingInform from "../../components/home-page/user/user-account/HelpingInform";
// import useUserStore from "../../store/UserStore";

function UserAccount() {
    const { user } = useUser();
    const { getToken } = useAuth();
    const {
        user: userData,
        actionGetMyAccount,
        actionUpdateImageUrl,
        actionCreateUpdateAccount,
        actionInactiveAccount,
    } = useUserStore();
    const [profilePicture, setProfilePicture] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editField, setEditField] = useState("");
    const [editValue, setEditValue] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // ดึงข้อมูลผู้ใช้จาก store
    useEffect(() => {
        const fetchUserDataDB = async () => {
            try {
                const token = await getToken();
                if (!token) {
                    console.error("No token");
                    return;
                }
                const { results } = await actionGetMyAccount(token); // เรียกฟังก์ชันจาก store
                setProfilePicture(results.imageUrl)
            } catch (error) {
                console.error("getMyAccount error", error);
            }
        };
        fetchUserDataDB();
    }, [actionGetMyAccount]);




    // อัปเดตรูปโปรไฟล์
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setProfilePicture(URL.createObjectURL(file));
            try {
                const token = await getToken();
                if (!token) {
                    console.error("No token");
                    return;
                }
                const formData = new FormData();
                formData.append("file", file);
                await actionUpdateImageUrl(token, formData); // เรียกฟังก์ชันจาก store
                console.log("Image uploaded successfully");
                await actionGetMyAccount(token); // ดึงข้อมูลใหม่หลังจากอัปเดต
            } catch (error) {
                console.error("updateImageUrl error", error);
            }
        }
    };

    // เปิด Modal แก้ไขข้อมูล
    const handleEditClick = (field, value) => {
        setEditField(field);
        setEditValue(value);
        setShowEditModal(true);
    };

    // บันทึกการแก้ไขข้อมูล
    const handleSaveEdit = async () => {
        // Reset errors
        setModalErrors({
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
        });
    
        let hasError = false;
        const newErrors = {};
    
        // ตรวจสอบ required fields
        if (editField === "fullName" && !editValue.trim()) {
            newErrors.fullName = "Full name is required.";
            hasError = true;
        }
        if (editField === "email" && !editValue.trim()) {
            newErrors.email = "Email is required.";
            hasError = true;
        } else if (editField === "email" && !/\S+@\S+\.\S+/.test(editValue)) {
            newErrors.email = "Please enter a valid email address.";
            hasError = true;
        }
        if (editField === "phoneNumber" && !editValue.trim()) {
            newErrors.phoneNumber = "Phone number is required.";
            hasError = true;
        } else if (editField === "phoneNumber" && !/^\d+$/.test(editValue)) {
            newErrors.phoneNumber = "Please enter a valid phone number.";
            hasError = true;
        }
        if (editField === "address" && !editValue.trim()) {
            newErrors.address = "Address is required.";
            hasError = true;
        }
    
        // หากมี error ให้อัปเดต state และหยุดการทำงาน
        if (hasError) {
            setModalErrors(newErrors);
            return;
        }
    
        // หากไม่มี error ให้บันทึกข้อมูล
        try {
            const token = await getToken();
            if (!token) {
                console.error("No token");
                return;
            }
            const updateData = { [editField]: editValue };
            await actionCreateUpdateAccount(token, updateData);
            await actionGetMyAccount(token);
            setShowEditModal(false);
        } catch (error) {
            console.error("createUpdateAccount error", error);
        }
    };


const [modalErrors, setModalErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
});


    // ลบบัญชีผู้ใช้
    const handleDeleteAccount = async () => {
        const token = await getToken(); // หรือ auth context

        if (!token) {
            console.error("No token found! User might be logged out.");
            return;
        }

        await actionInactiveAccount(token);
    };



    return (
        <>
            {/* <AirbnbLOGO />
            <div className="flex justify-between items-center px-10 py-4 border-b border-gray-200">
                <div>
                </div> */}

                {/* <UserNav /> */}

            {/* </div> */}


            <div className="min-h-[600px] bg-white px-10 py-10">
                <div className="max-w-[1360px] mx-auto mb-8">
                    <h1 className="text-3xl font-semibold">Personal info</h1>
                    <p className="text-gray-500 text-sm mt-2">
                        The information you share will be used across Airbnb to help other guests and hosts get to know you.{" "}
                        <a href="#" className="text-blue-500 underline">
                            Learn more
                        </a>
                    </p>
                </div>




                <div className="max-w-[1360px] mx-auto flex gap-10">
                    {/* รูปโปรไฟล์ */}
                    <div className="flex-shrink-0 w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center text-white text-[48px] font-bold relative overflow-hidden">
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                        )
                            // ) : userData?.imageUrl ? (
                            //     <img src={userData.imageUrl} alt="Profile" className="w-full h-full object-cover" />
                            // ) 
                            : (
                                "W"
                            )}
                        <label className="absolute bottom-[17px] left-1/2 transform -translate-x-1/2 bg-white border rounded-full px-[12px] py-[6px] text-xs shadow-md flex items-center space-x-1 cursor-pointer">
                            <CameraIcon className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">Upload</span>
                            <input type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                    {/* ข้อมูลส่วนตัว */}
                    <div className="flex-grow">
                        {[
                            { label: "Fullname", value: userData?.fullName || "Wathanyu Thirinat", action: "Edit", field: "fullName" },
                            { label: "Email address", value: userData?.email || "e***@example.com", action: "Edit", field: "email" },
                            { label: "Phone number", value: userData?.phoneNumber || "+9***8765432", action: "Edit", field: "phoneNumber" },
                            { label: "Address", value: userData?.address || "Not provided", action: "Edit", field: "address" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border-b border-gray-200 py-4"
                            >
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{item.label}</p>
                                    <p className="text-sm text-gray-500">{item.value}</p>
                                </div>
                                <button
                                    className="text-sm text-blue-500 hover:text-blue-700"
                                    onClick={() => handleEditClick(item.field, item.value)}
                                >
                                    {item.action}
                                </button>
                            </div>
                        ))}
                        {/* ปุ่ม Delete Account */}
                        <div className="mt-8">
                            <button
                                className="bg-[#FF385C] text-white px-4 py-2 rounded-lg hover:bg-[#FF385C]/80 transition"
                                onClick={() => setShowDeleteModal(true)}
                            >
                                Inactive Account
                            </button>
                            {showDeleteModal && (
                                <div
                                    style={{
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        zIndex: 1000,
                                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#fff",
                                            padding: "20px",
                                            borderRadius: "10px",
                                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                            maxWidth: "400px",
                                            width: "100%",
                                        }}
                                    >
                                        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
                                            InActive Account
                                        </h2>
                                        <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                                            Are you sure you want to delete your account? This action cannot be undone.
                                        </p>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <button
                                                onClick={() => setShowDeleteModal(false)}
                                                style={{
                                                    padding: "8px 16px",
                                                    fontSize: "14px",
                                                    color: "#555",
                                                    backgroundColor: "#f5f5f5",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                    marginRight: "10px",
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleDeleteAccount}
                                                style={{
                                                    padding: "8px 16px",
                                                    fontSize: "14px",
                                                    color: "#fff",
                                                    backgroundColor: "#e53e3e",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                }}
                                            >
                                                Inactive Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* ส่วนช่วยเหลือ */}
                    <HelpingInform />
                </div>


                
                {/* Popup Edit Modal */}
                {showEditModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                maxWidth: "400px",
                                width: "100%",
                            }}
                        >
                            <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
                                Edit
                            </h2>
                            <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                                Update your edit below.{" "}
                                <a href="#" style={{ color: "#007BFF", textDecoration: "underline" }}>
                                    Learn more
                                </a>
                            </p>
                            {/* Input สำหรับแก้ไข */}
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    borderRadius: "5px",
                                    borderWidth: 1,
                                    borderColor: "#ddd",
                                    marginBottom: "20px",
                                }}
                            />
                            {/* ปุ่ม Save และ Cancel */}
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <button
                                    onClick={() => setShowEditModal(false)}
                                    style={{
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                        color: "#555",
                                        backgroundColor: "#f5f5f5",
                                        borderRadius: "5px",
                                        borderWidth: "0",
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    style={{
                                        padding: "8px 16px",
                                        fontSize: "14px",
                                        color: "#fff",
                                        backgroundColor: "#000",
                                        borderRadius: "5px",
                                        borderWidth: "0",
                                    }}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* <ContentFooter /> */}

        </>


    );
}



export default UserAccount;