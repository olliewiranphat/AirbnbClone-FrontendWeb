import React from 'react'
import { motion } from 'framer-motion'
import { CircleHelp, House, MessageSquare } from 'lucide-react'

function RenderModal() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // เริ่มต้นจางและเล็กลง
            animate={{ opacity: 1, scale: 1 }}   // เมื่อเปิด ให้ Fade-in และขยายขึ้น
            exit={{ opacity: 0, scale: 0.8 }}    // เมื่อปิด ให้ Fade-out และย่อขนาดลง
            transition={{ duration: 0.3 }}       // ตั้งค่า duration ให้ Animation ใช้เวลา 0.3 วินาที
            className='w-full h-full bg-white absolute top-0 py-10 flex flex-col gap-7'>
            <button className='flex gap-4 cursor-pointer'>
                <MessageSquare />
                <span>All</span>
            </button>
            <button className='flex gap-4 cursor-pointer'>
                <House />
                <span>Hosting</span>
            </button>
            <button className='flex gap-4 cursor-pointer'>
                <CircleHelp />
                <span className='header'>Support</span>
            </button>
        </motion.div>
    )
}

export default RenderModal