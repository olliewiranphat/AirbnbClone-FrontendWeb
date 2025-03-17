import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getMyAccount } from "../api-server/userController"

const UserStore = (set) => ({
    userData: null,
    actionGetMyAccount: async (token) => {
        try {
            const getMyAccountZustand = await getMyAccount(token)
            console.log('getMyAccountZustand', getMyAccountZustand);
            set({ userData: getMyAccountZustand.data.results })
        } catch (error) {
            console.log("getMyAccount, ERROR", error);
        }
    }
})

const useUserStore = create(persist(UserStore, { name: "user" }))
export default useUserStore