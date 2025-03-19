// import { persist } from "zustand/middleware"
// import {create} from "zustand"
// import { getMyAccount } from "../api/userController"

// const UserStore = (set) => ({
//     userData: null,
//     actionGetMyAccount: async (token) => {
//         try {
//             const getMyAccountZustand = await getMyAccount(token)
//             console.log('getMyAccountZustand', getMyAccountZustand)
//             set({ userData: getMyAccountZustand.data.results })
//         } catch (error) {
//             console.log('getMyAccountZustand Error', error)
//         }
//     }
// })


// const useUserStore = create(persist(UserStore, { name: "user" }))
// export default useUserStore
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  getMyAccount as apiGetMyAccount,
  updateImageUrl as apiUpdateImageUrl,
  createUpdateAccount as apiCreateUpdateAccount,
  inactiveAccount as apiInactiveAccount,
} from "../api/userController";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      getToken: async () => localStorage.getItem("token"),
      actionGetMyAccount: async (token) => {
        try {
          const response = await apiGetMyAccount(token);
          console.log("REsponse", response)
          set({ user: response.data.results });
          return response.data;
        } catch (error) {
          console.error("getMyAccount error", error);
        }
      },
      actionUpdateImageUrl: async (token, imageUrl) => {
        try {
          await apiUpdateImageUrl(token, imageUrl);
          // Refresh user data after updating image URL
          get().actionGetMyAccount(token);
        } catch (error) {
          console.error("updateImageUrl error", error);
        }
      },
      actionCreateUpdateAccount: async (token, updateData) => {
        try {
          await apiCreateUpdateAccount(token, updateData);
          // Refresh user data after updating account
          get().actionGetMyAccount(token);
        } catch (error) {
          console.error("createUpdateAccount error", error);
        }
      },

      actionInactiveAccount: async (token) => {
        try {
    
            const resp = await apiInactiveAccount(token);
            console.log(resp)
            // Clear user data after deactivating account
            set({ user: null });
        } catch (error) {
            console.error("inactiveAccount error", error);
        }
    },
    
    


    }),

    
    {
      name: "user-storage", // unique name for persisting state
    }
  )
);

export default useUserStore;