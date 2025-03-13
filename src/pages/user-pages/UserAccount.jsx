import React, { useState } from "react";
import { CameraIcon, LockClosedIcon, PencilIcon, EyeIcon } from "@heroicons/react/outline";
import axios from "axios";

function UserAccount() {
    const [open, setOpen] = useState(false); // State สำหรับควบคุมการเปิด/ปิด Modal
    const [dialogType, setDialogType] = useState(""); // State สำหรับระบุว่าเป็น Add หรือ Edit
    const [formData, setFormData] = useState(""); // State สำหรับข้อมูลในฟอร์ม
    const [profilePicture, setProfilePicture] = useState(""); // URL ของรูปโปรไฟล์
    const [imageFile, setImageFile] = useState(null); // ไฟล์รูปภาพที่เลือก

    // ฟังก์ชันเปิด Modal
    const handleOpen = (type, value) => {
        setDialogType(type);
        setFormData(value || "");
        setOpen(true);
    };

    // ฟังก์ชันปิด Modal
    const handleClose = () => {
        setOpen(false);
        setFormData("");
    };

    // ฟังก์ชัน Submit ข้อมูล
    const handleSubmit = () => {
        console.log(dialogType === "Add" ? "Adding:" : "Editing:", formData);
        handleClose();
    };

    // ฟังก์ชันจัดการการเลือกไฟล์รูปภาพ
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setProfilePicture(URL.createObjectURL(file)); 
        }
    };

    // ฟังก์ชัน Upload รูปภาพไปยัง API
    const handleUpload = async () => {
        if (!imageFile) return;

        const formData = new FormData();
        formData.append("profilePicture", imageFile);

        try {
            const response = await axios.post("https://api.example.com/profile/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Image uploaded successfully!");
            setProfilePicture(response.data.profilePicture); // อัปเดต URL รูปภาพจาก API
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white px-10 py-10">
            {/* Header */}
            <div className="max-w-[1360px] mx-auto mb-8">
                <h1 className="text-3xl font-semibold">Personal info</h1>
                <p className="text-gray-500 text-sm mt-2">
                    The information you share will be used across Airbnb to help other guests and hosts get to know you.{" "}
                    <a href="#" className="text-blue-500 underline">
                        Learn more
                    </a>
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-[1360px] mx-auto flex gap-10">
                {/* Profile Picture */}
                <div className="flex-shrink-0 w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center text-white text-[48px] font-bold relative overflow-hidden">
                    {profilePicture ? (
                        <img src={profilePicture} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        "W"
                    )}
                    <label className="absolute bottom-[17px] left-1/2 transform -translate-x-1/2 bg-white border rounded-full px-[12px] py-[6px] text-xs shadow-md flex items-center space-x-1 cursor-pointer">
                        <CameraIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Upload</span>
                        <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                </div>

                {/* ปุ่ม Upload */}
                {imageFile && (
                    <div className="mt-4">
                        <button
                            onClick={handleUpload}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Save Profile Picture
                        </button>
                    </div>
                )}

                {/* Personal Info */}
                <div className="flex-grow">
                    {[
                        { label: "Fullname", value: "Wathanyu Thirinat", action: "Edit" },
                        { label: "Email address", value: "w***@gmail.com", action: "Edit" },
                        { label: "Phone number", value: "+9***234567", action: "Edit" },
                        { label: "Address", value: "Not provided", action: "Edit" },
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
                                onClick={() => handleOpen(item.action, item.value)}
                            >
                                {item.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Help Section */}
                <div className="flex-shrink-0 w-[300px] bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-6">
                    {[
                        {
                            title: "Why isn’t my info shown here?",
                            description:
                                "We’re hiding some account details to protect your identity.",
                            icon: <LockClosedIcon className="w-6 h-6 text-pink-500" />,
                        },
                        {
                            title: "Which details can be edited?",
                            description:
                                "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book – or to continue hosting.",
                            icon: <PencilIcon className="w-6 h-6 text-pink-500" />,
                        },
                        {
                            title: "What info is shared with others?",
                            description:
                                "Airbnb only releases contact information for hosts and guests after a reservation is confirmed.",
                            icon: <EyeIcon className="w-6 h-6 text-pink-500" />,
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            {/* Icon */}
                            <div>{item.icon}</div>
                            {/* Text */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
                    <div className="bg-white rounded-lg w-[400px] p-[20px] shadow-lg relative">
                        {/* Header */}
                        <h2 className="text-lg font-semibold mb-[10px]">{dialogType}</h2>
                        <button
                            onClick={handleClose}
                            className="absolute top-[10px] right-[10px] text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                        <p className="text-sm text-gray-500 mb-[20px]">
                            Update your {dialogType.toLowerCase()} below.{" "}
                            <a href="#" className="text-blue-500 underline">
                                Learn more
                            </a>
                        </p>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder={`${dialogType} (optional)`}
                            value={formData}
                            onChange={(e) => setFormData(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-[10px] py-[8px] mb-[20px]"
                        />

                        {/* Actions */}
                        <div className="flex justify-between items-center">
                            <button
                                onClick={handleClose}
                                className="text-sm text-blue-500 hover:text-blue-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-black text-white px-[20px] py-[8px] rounded-lg hover:bg-gray-800 transition"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserAccount;
