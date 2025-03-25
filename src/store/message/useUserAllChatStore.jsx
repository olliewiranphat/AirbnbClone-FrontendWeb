import { create } from "zustand";
import { persist } from "zustand/middleware";
import { APIGetChatConversationID, APIGetMyAllChats } from "../../api/message/userAllChats";
import { APIGetCreateAdminChat } from "../../api/message/userAdminChat";

// CREATE STORE AND KEEP IN SESSIONSTORE, IF CLOSE WEBSITE WITH DATA WILL LOST (FETCH NEW AGAIN)
const useUserAllChatsStore = create(persist(
    (set) => ({
        //SET WANTED STATES
        myAllChats: [],
        chatConversationIDData: null,
        // resetMyAllChats: () => set({ myAllChats: null }), //RESET DATA = null
        actionGetMyAllChats: async (token) => {
            try {
                const response = await APIGetMyAllChats(token)
                // console.log('response.data.results', response.data.results);
                set({ myAllChats: response.data.results })
            } catch (error) {
                console.log("APIGetMyAllChats,ERROR", error);

            }

        },
        actionGetChatConversationID: async (token, conversationID) => {
            try {
                const response = await APIGetChatConversationID(token, conversationID)
                // console.log('response.data.results', response.data.results);
                set({ chatConversationIDData: response.data.results })
            } catch (error) {
                console.log("APIOpenChatConversationID,ERROR", error);

            }

        },
        actionGetUserAdminChats: async (token) => {
            try {
                const response = await APIGetCreateAdminChat(token)
                console.log('response.data.results', response.data.results);
                set({ myAllChats: [response.data.results] })
            } catch (error) {
                console.log("APIGetCreateAdminChat,ERROR", error);

            }

        },
    }),
    {
        name: 'userAllChats-storage', //NAME IN SESSIONSTORAGE
        getStorage: () => sessionStorage //USE sessionStorage KEEPING DATA
    }
))


export default useUserAllChatsStore;