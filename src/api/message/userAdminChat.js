import axios from "axios";

export const APIGetCreateAdminChat = async (token) => {
    return await axios(`http://localhost:8081/user/messages/chat-with-admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};