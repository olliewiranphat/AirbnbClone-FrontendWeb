import React, { useEffect, useRef, useState } from 'react'
import SuggestDest from './SuggestDest'

function WhereDest() {
    const [] = useState(false)
    const [showSuggest, setShowSuggest] = useState(false)
    const [searchQuery, setSearchQuery] = useState(""); // state สำหรับเก็บคำค้นหา
    const menuRef = useRef()
    //close popup when click outside:
    useEffect(() => {
        const hdlClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowSuggest(false)
            }
        }
        document.addEventListener("mousedown", hdlClickOutside)
        return () => {
            document.removeEventListener("mousedown", hdlClickOutside)
        }
    }, [])


    return (<>
        <div className='flex flex-col' ref={menuRef}>
            <span className='text-[12px] strong'>Where</span>
            <button onClick={() => setShowSuggest(!showSuggest)}>
                <input className='relative text-[14px] text-[#6a6a6a] bg-transparent outline-hidden' 
                placeholder='Search destinations' 
                value={searchQuery}  // ใช้ state เพื่อเก็บคำค้นหา
                onChange={(e) => {
                    setSearchQuery(e.target.value);  // อัปเดตคำค้นหา
                    setShowSuggest(true);  // แสดง suggestions ทันทีที่พิมพ์
                }}
                />
            </button>
        </div>
        <div className='w-[5px] h-[30px] border-r-[1px] border-gray-300'></div>
        {showSuggest && (
                <SuggestDest 
                    searchQuery={searchQuery} 
                    onSelect={(name) => {
                        setSearchQuery(name);  // เมื่อเลือกสถานที่ให้เซ็ตคำค้นหาใหม่
                        setShowSuggest(false);  // ซ่อน suggestions
                    }} 
                />
            )}
    </>)
}

export default WhereDest