import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";

const ChatAI = () => {
    const { user } = useUser()
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [showChatBox, setShowChatBox] = useState(false)
    const chatContainerRef = useRef(null) //use to reference the position wanted to scroll down
    const sendMessage = async () => {
        if (!message.trim()) return;
        setMessage("");

        const userMessage = { sender: "User", text: message };
        setChat((prev) => [...prev, userMessage]);

        try {
            const res = await axios.post("http://localhost:8081/user/chat/ai", { message });
            const aiMessage = { sender: "AI", text: res.data.reply };
            setChat((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error:", error);
        }

    };

    const hdlShowChatAIBox = () => {
        setShowChatBox(true)
    }
    // console.log('showChatBox', showChatBox);

    //SCROLL TO THE LAST MESSAGE WHEN CHAT HAS CHANGED
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [chat]) //DO THIS, WHEN CHAT HAS CHANGED

    console.log('chat', chat);



    return (

        <>
            <button
                onClick={hdlShowChatAIBox}
                className="rounded-full cursor-pointer bg-[#dd1062] absolute left-10 bottom-10 text-white px-4 py-2"
            >
                Ask StayzyAI
            </button>
            <AnimatePresence>
                {
                    showChatBox && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }} // เริ่มต้นจางและเล็กลง
                            animate={{ opacity: 1, scale: 1 }}   // เมื่อเปิด ให้ Fade-in และขยายขึ้น
                            exit={{ opacity: 0, scale: 0.8 }}    // เมื่อปิด ให้ Fade-out และย่อขนาดลง
                            transition={{ duration: 0.3 }}       // ตั้งค่า duration ให้ Animation ใช้เวลา 0.3 วินาที
                            className="w-[300px] rounded-2xl border border-[#dd1062] absolute left-8 bottom-6 overflow-hidden">
                            {/* CHAT HEADER */}
                            <div className="w-full bg-[#dd1062] h-[60px] flex gap-4 items-center text-white px-4 text-[18px] strong">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img src="https://i.ibb.co/PZLH1CBm/Screenshot-2025-03-27-211813.png" alt="AI" className="w-full h-full object-contain" />
                                </div>
                                <span>StayzyAI</span>
                                <button onClick={() => setShowChatBox(false)}
                                    className="w-[44%] flex justify-end cursor-pointer">
                                    <X />
                                </button>
                            </div>

                            {/* MESSAGE-HISTORY CONTAINER */}
                            <div ref={chatContainerRef}
                                className="w-full h-[240px] bg-white overflow-y-scroll p-4 flex flex-col gap-3 text-[14px]">
                                {chat.map((msg, index) => (
                                    msg.sender === "User" ? (<div key={index}
                                        className={`flex gap-2 self-end`}
                                    >
                                        <div className="w-[80%]">{msg.text}</div>
                                        <div className="w-10 h-10 overflow-hidden rounded-full flex items-center">
                                            <img src={user?.imageUrl} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    </div>) : (<div key={index}
                                        className={`flex gap-2 self-start`}
                                    >
                                        <div className="w-10 h-10 overflow-hidden rounded-full flex items-center">
                                            <img src="https://i.ibb.co/PZLH1CBm/Screenshot-2025-03-27-211813.png" alt=""
                                                className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-[80%]">{msg.text}</div>
                                    </div>)
                                ))}
                            </div>

                            {/* SENDER */}
                            <div className="flex gap-4 w-full bg-[#dd1062] py-2 px-3">
                                {/* INPUT TYPE MESAGE */}
                                <input value={message} onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Ask AI ..."
                                    className="bg-white px-4 py-2 w-[70%] rounded-2xl" />

                                {/* BTN SEND MESSAGE */}
                                <button onClick={sendMessage}
                                    className="px-4 py-2 text-white cursor-pointer hover:bg-black hover:duration-300 rounded-lg bg-[#222222] hover:font-semibold"
                                >Send
                                </button>

                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
};

export default ChatAI;
