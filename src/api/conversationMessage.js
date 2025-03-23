import axios from "axios";




export const getChatHistory = async (token, conversationID) => {
    return await axios(`http://localhost:8081/user/messages/chat-with-admin/${conversationID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

/// CHAT WITH ADMIN:
// CREATE CONVERSATION OPEN CHAT:
export const createChatAdminRoom = async (token) => {
    return await axios.get(`http://localhost:8081/user/messages/conversation/chat-with-admin`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};