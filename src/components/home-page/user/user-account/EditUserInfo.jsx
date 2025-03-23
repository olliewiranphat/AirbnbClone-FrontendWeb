import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createUpdateAccount } from '../../../../api-server/userController'
import useUserStore from '../../../../store/UserStore'
import { AnimatePresence, motion } from 'framer-motion'

function EditUserInfo({ setShowEditModal, item }) {
    const actionGetMyAccount = useUserStore(state => state.actionGetMyAccount)
    // console.log('item', item); //item.label
    const { getToken } = useAuth()

    const { register, handleSubmit } = useForm()
    const hdlUpdateUserInfoITEM = async (value) => {
        console.log('value', value);
        setShowEditModal(false)
        const token = await getToken()
        // console.log(token);
        const resCreateUpdateAccont = await createUpdateAccount(token, value)
        console.log('resCreateUpdateAccont', resCreateUpdateAccont);
        actionGetMyAccount(token)
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
                backgroundColor: "rgba(255, 255, 255, 0.8)", // โปร่งใส COVER WHOLE PAGE
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // เริ่มต้นจางและเล็กลง
                animate={{ opacity: 1, scale: 1 }}   // เมื่อเปิด ให้ Fade-in และขยายขึ้น
                exit={{ opacity: 0, scale: 0.8 }}    // เมื่อปิด ให้ Fade-out และย่อขนาดลง
                transition={{ duration: 0.3 }}       // ตั้งค่า duration ให้ Animation ใช้เวลา 0.3 วินาที
            >
                {/* EDIT MODAL each ITEM*/}
                <form onSubmit={handleSubmit(hdlUpdateUserInfoITEM)}
                    style={{
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    {/* DESCRIPTION */}
                    <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
                        Edit
                    </h2>
                    <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                        Update your edit below.{" "}
                        <a href="#" style={{ color: "#007BFF", textDecoration: "underline" }}>
                            Learn more
                        </a>
                    </p>

                    {/* EDIT Input-Value specially ITEM*/}
                    <input
                        type="text"
                        defaultValue={item?.value}
                        {...register(item?.field)}
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
                        {/* ปุ่ม Cancel */}
                        <button
                            type='button'
                            onClick={() => setShowEditModal(false)}
                            style={{
                                padding: "8px 16px",
                                fontSize: "14px",
                                color: "#555",
                                backgroundColor: "#f5f5f5",
                                borderRadius: "5px",
                                borderWidth: "0",
                                cursor: "pointer"
                            }}
                        >Cancel</button>

                        {/* ปุ่ม SUBMIT UPDATE: API SERVER (/user/account/update)*/}
                        <button
                            type='submit'
                            style={{
                                padding: "8px 16px",
                                fontSize: "14px",
                                color: "#fff",
                                backgroundColor: "#000",
                                borderRadius: "5px",
                                borderWidth: "0",
                                cursor: "pointer"
                            }}
                        >Save</button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default EditUserInfo