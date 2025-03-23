import React from 'react'
import { motion } from 'framer-motion'
import { House, MessageSquare } from 'lucide-react'
import ChatWithAdmin from './admin/ChatWithAdmin'
import ChatWithHost from './host/ChatWithHost'
import ChatAll from './all-inboxlists/ChatAll'

function RenderModal({ setShowModal, setLoading }) {


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // เริ่มต้นจางและเล็กลง
            animate={{ opacity: 1, scale: 1 }}   // เมื่อเปิด ให้ Fade-in และขยายขึ้น
            exit={{ opacity: 0, scale: 0.8 }}    // เมื่อปิด ให้ Fade-out และย่อขนาดลง
            transition={{ duration: 0.3 }}       // ตั้งค่า duration ให้ Animation ใช้เวลา 0.3 วินาที
            className='w-[30%] h-[300px] bg-white absolute py-10 flex flex-col gap-7 z-50'>

            {/* ALL CONVERSATION LISTS : HOST-ADMIN*/}
            <ChatAll setShowModal={setShowModal} setLoading={setLoading} />

            {/* HOST LISTS */}
            <ChatWithHost setShowModal={setShowModal} setLoading={setLoading} />

            {/* CHAT WITH ADMIN */}
            <ChatWithAdmin setShowModal={setShowModal} setLoading={setLoading} />
        </motion.div>
    )
}

export default RenderModal