import { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import ImagePreviewLISTS from "./ImagePreviewLISTS";

const MessageInputUser = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState([]); //SEND IMAGE && SHOW PREVIEW
    const [isSending, setIsSending] = useState(false); // New loading state

    const fileInputRef = useRef(null);
    // const { sendMessage } = userChatStore();

    const handleImageChange = (e) => {
        // console.log('e.target.files', e.target.files);
        const file = e.target.files[0];
        // console.log('file', file); //ONE FILE
        //CHECK IMAGE TYPE
        if (!file.type.startsWith("image/")) {
            // toast.error("Please select an image file");
            alert("Please select an image file")
            return;
        }

        // console.log(URL.createObjectURL(file).slice(5));
        setImagePreview([...imagePreview, URL.createObjectURL(file)])


    };
    console.log('imagePreview', imagePreview);


    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim() && imagePreview.length === 0) return; //NO TEXT NO IMAGE
        setIsSending(true); // Show loading
        // try {
        //     await sendMessage({ //SOCKET.IO
        //         text: text.trim(),
        //         image: imagePreview,
        //     });
        //     setText("");
        //     setImagePreview(null);
        //     if (fileInputRef.current) fileInputRef.current.value = "";
        // } catch (error) {
        //     console.error("Failed to send message:", error);
        //     alert("Failed to send message")
        //     //   toast.error(error.message || "Failed to send message");
        // } finally {
        //     setIsSending(false); // Hide loading
        // }
    };

    return (
        <div className="absolute bottom-0 bg-[#222222] px-5 py-4 w-full">
            {imagePreview.length > 0 && <ImagePreviewLISTS imagePreview={imagePreview} setImagePreview={setImagePreview} />
            }
            <form onSubmit={handleSendMessage} className="flex gap-4 flex-wrap justify-center">

                {/* TEXT MESSAGE */}
                <input
                    type="text"
                    className="w-[85%] input rounded-lg input-sm sm:input-md"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isSending}
                />

                {/* IMAGE MESSAGE */}
                <div className="flex flex-1 gap-4 items-center justify-center">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        disabled={isSending}
                    />
                    <button
                        type="button"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-[#dd1062] hover:duration-300 text-white bg-[#FF385C]"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isSending}
                    >
                        <Image className="h-[20px] m-auto" />
                    </button>

                    {/* SEND DATA */}
                    <button
                        type="submit"
                        className="w-[40px] h-[40px] rounded-full cursor-pointer hover:bg-[#dd1062] hover:duration-300 text-white bg-[#FF385C] relative"
                        disabled={(!text.trim() && imagePreview.length === 0 || isSending)}
                    >
                        {isSending ? (
                            <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                            <Send className="text-white cursor-pointer h-[22px] absolute left-[6px] top-[10px]" />
                        )}
                    </button>
                </div>

            </form >
        </div >
    );
};

export default MessageInputUser;