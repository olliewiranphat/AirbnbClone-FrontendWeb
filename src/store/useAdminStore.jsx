import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getAllAccomodation, getAllUser } from "../api/admin";

const useAdminStore = create(persist((set, get) => ({
      admin: null,
      actionGetAllUser: async (token) => {
        try {
          const response = await getAllUser(token);
          console.log("REsponse", response)
        //   set({ admin: response.data.results });
          return response.data.results;
        } catch (error) {
          console.error("GetAllUser error", error);
        }
      },
      actionGetAllAccomodation: async (token) => {
        try {
          const response = await getAllAccomodation(token);
          console.log("REsponse", response)
          set({ admin: response.data.results });
          return response.data.results;
        } catch (error) {
          console.error("getAllCategory error", error);
        }
      },

    }),

    
    {
      name: "admin-storage", // unique name for persisting state
    }
  )
);

export default useAdminStore;