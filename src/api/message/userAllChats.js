import axios from "axios";

export const APIGetMyAllChats = async (token) => {
    return await axios(`http://localhost:8081/user/messages/get-my/allchats`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};


export const APIGetChatConversationID = async (token, conversationID) => {
    return await axios(`http://localhost:8081/user/messages/chat-history/${conversationID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};