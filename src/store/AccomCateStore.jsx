import { create } from "zustand"
import { persist } from "zustand/middleware"
import { getAllAccomCate } from "../api-server/adminController";

const AccomCateStore = (set) => ({
    allAccomCate: null,
    actionGetAllAccomCate: async (token) => {
        try {
            const getAdminAllAccomCate = await getAllAccomCate(token)
            console.log('getAdminAllAccomCate', getAdminAllAccomCate);
            set({ allAccomCate: getAdminAllAccomCate.data.results })
        } catch (error) {
            console.log("getAdminAllAccomCate, ERROR", error);
        }
    }
})
const useAccomCateStore = create(persist(AccomCateStore, { name: "accomCate" }))
export default useAccomCateStore