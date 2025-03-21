import React from 'react'
import { motion } from "framer-motion";
import { useAuth } from '@clerk/clerk-react';
import { inactiveAccount } from '../../../../api-server/userController';

function InactiveModal({ setShowInactiveModal }) {
    const { getToken } = useAuth()

    const hdlInactiveAccount = async () => {
        setShowInactiveModal(false)
        const token = await getToken()
        console.log('token', token);

        try {
            const resInactiveAccount = await inactiveAccount(token);
            console.log("resInactiveAccount", resInactiveAccount);
        } catch (error) {
            console.error("Error Inactivating Account:", error.response?.data || error.message);
        }
    }

    return (
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
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // เริ่มต้นจางและเล็กลง
                animate={{ opacity: 1, scale: 1 }}   // เมื่อเปิด ให้ Fade-in และขยายขึ้น
                exit={{ opacity: 0, scale: 0.8 }}    // เมื่อปิด ให้ Fade-out และย่อขนาดลง
                transition={{ duration: 0.3 }}       // ตั้งค่า duration ให้ Animation ใช้เวลา 0.3 วินาที
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
                    Inactive Account
                </h2>
                <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                    Are you sure you want to delete your account? This action cannot be undone.
                </p>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    {/* CANCEL BTN */}
                    <button
                        type="button"
                        onClick={() => setShowInactiveModal(false)}
                        style={{
                            padding: "8px 16px",
                            fontSize: "14px",
                            color: "#555",
                            backgroundColor: "#f5f5f5",
                            borderRadius: "5px",
                            border: "none",
                            marginRight: "10px",
                            cursor: "pointer"
                        }}
                    >
                        Cancel
                    </button>

                    {/* CONFIRM INACTIVE ACCOUNT */}
                    <button
                        onClick={hdlInactiveAccount}
                        style={{
                            padding: "8px 16px",
                            fontSize: "14px",
                            color: "#fff",
                            backgroundColor: "#e53e3e",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        Inactive Account
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default InactiveModal