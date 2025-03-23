import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAccomcate, deletedAccomcate, getAllAccomodation, getAllUser, getListAccomocate } from "../api/admin";

const useAdminStore = create(persist((set, get) => ({
      admin: null,
      allcategory: null,
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
      actionGetListAccomocate : async (token)=>{
        try {
            const response = await getListAccomocate(token);
            console.log('response=>', response)
            return response.data.allAccomCate
        } catch (error) {
            console.error("getListAccomocate", error)
        }
      },
      actionGetDeleteAccomocate : async (token,categoryId)=>{
        try {
          const deleted = await deletedAccomcate(token,categoryId)
          console.log('response deleted sucess', deleted)
        } catch (error) {
          console.error("error deleted", error)
        }
      },
      actionGetUpdateAccomocate : async (token,categoryId)=>{
        try {
          const updated = await updateAccomcate(token,categoryId)
          console.log('response updated sucess', updated)
        } catch (error) {
          console.error("error updated", error)
        }
      },
      actionGetCreateAccomocate : async (token,body)=>{
        try {
          const created = await createAccomcate(token,body)
          console.log('response created sucess', created)
        } catch (error) {
          console.error("error create", error)
        }
      }
    }),
    

    
    {
      name: "admin-storage", // unique name for persisting state
    }
  )
);

export default useAdminStore;