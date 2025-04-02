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
import PersonalInfoData from "../../components/user/user-account-page/PersonalInfoData";
import UserImageUrl from "../../components/user/user-account-page/UserImageUrl";
import PersonalDataITEM from "../../components/user/user-account-page/PersonalDataITEM";
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
            <div className="min-h-[600px] bg-white px-10 py-10">
                <PersonalInfoData />


                <div className="max-w-[1360px] mx-auto flex gap-10">
                    {/* รูปโปรไฟล์ */}
                    <UserImageUrl />
                    {/* ข้อมูลส่วนตัว */}
                    <div className="flex-grow">
                        {[
                            { label: "Fullname", value: userData?.fullName, action: "Edit", field: "fullName" },
                            { label: "Email address", value: userData?.email, action: "Edit", field: "email" },
                            { label: "Phone number", value: userData?.phoneNumber, action: "Edit", field: "phoneNumber" },
                            { label: "Address", value: userData?.address, action: "Edit", field: "address" },
                        ].map((item, index) => (
                            <PersonalDataITEM item={item} key={index} handleEditClick={handleEditClick} />
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
                </div >


                {/* Popup Edit Modal */}
                {
                    showEditModal && (
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
                    )
                }
            </div >
            {/* <ContentFooter /> */}

        </>


    );
}



export default UserAccount;