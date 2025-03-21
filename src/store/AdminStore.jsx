import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllAccommodations, getAllBookings, getAllHosts, getAllUsers, getDashboard } from "../api-server/adminController";

const AdminStore = (set) => ({
    adminDashboard: null,
    allUsers: null,
    allHosts: null,
    allAccommodatons: null,
    allBookings: null,
    actionGetDashboard: async (token) => {
        try {
            const getAdminDashboard = await getDashboard(token)
            // console.log('getAdminDashboard', getAdminDashboard);
            set({ adminDashboard: getAdminDashboard.data.results })
        } catch (error) {
            console.log("getDashboard, ERROR", error);
        }
    },
    actionGetAllUsers: async (token) => {
        try {
            const getAdminAllUsers = await getAllUsers(token)
            // console.log('getAdminAllUsers', getAdminAllUsers);
            set({ allUsers: getAdminAllUsers.data.results })
        } catch (error) {
            console.log("getAllUsers, ERROR", error);
        }
    },
    actionGetAllHosts: async (token) => {
        try {
            const getAdminAllHosts = await getAllHosts(token)
            console.log('getAdminAllHosts', getAdminAllHosts);
            set({ allHosts: getAdminAllHosts.data.results })
        } catch (error) {
            console.log("getAllHosts, ERROR", error);
        }
    },
    actionGetAllAccommodations: async () => {
        try {
            const getAdminAllAccommodations = await getAllAccommodations()
            console.log('getAdminAllAccommodations', getAdminAllAccommodations);
            // console.log('getAdminAllAccommodations', getAdminAllAccommodations.data);
            set({ allAccommodatons: getAdminAllAccommodations })
        } catch (error) {
            console.log("getAdminAllAccommodations, ERROR", error);
        }
    },
    actionGetAllBookings: async (token) => {
        try {
            const GetAdminAllBookings = await getAllBookings(token)
            console.log('GetAdminAllBookings', GetAdminAllBookings);
            set({ allBookings: GetAdminAllBookings.data.results })
        } catch (error) {
            console.log("getAllBookings, ERROR", error);
        }
    }
})

const useAdminStore = create(persist(AdminStore, { name: "admin" }))
export default useAdminStore