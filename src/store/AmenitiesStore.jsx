import { create } from "zustand"
import { persist } from "zustand/middleware"
import { getAllAmenities } from "../api-server/adminController";

const AmenitiesStore = (set) => ({
    allAmenities: null,
    actionAllGetAmenities: async (token) => {
        try {
            const getAdminAllAmenities = await getAllAmenities(token)
            // console.log('getAdminAllAmenities', getAdminAllAmenities);
            set({ allAmenities: getAdminAllAmenities.data.results })
        } catch (error) {
            console.log("getAdminAllAmenities, ERROR", error);
        }
    }
})
const useAmenitiesStore = create(persist(AmenitiesStore, { name: "amenities" }))
export default useAmenitiesStore