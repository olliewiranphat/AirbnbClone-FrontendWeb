import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAccomcate, createAmenity, deletedAccomcate, deletedAmenity, getAllAccomodation, getAllUser, getAmenity, getBooking, getListAccomocate, updateAccomcate, updatedAmenity } from "../api/admin";

const useAdminStore = create(persist((set, get) => ({
      admin: null,
      allcategory: null,
      allAmenities: null,
      createAccomcate:null,
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
      },
      actionGetEditAccomocate : async (token,id,body)=>{
        try {
          const edited = await updateAccomcate(token,id,body)
          console.log('response created sucess', edited)
        } catch (error) {
          console.error("error create", error)
        }
      },
      actionGetBooking: async (token) => {
        try {
          //fetch ข้อมูลจากหลังบ้านมา
          const response = await getBooking(token);
          console.log('response Booking', response.data.AllBookings)
          // เก็บค่าจากหลังบ้านนมา
          set({ allBookings: 'getBooking', response })
          //return เพื่อส่งกลับไปหน้าที่จะใช้
          return response.data.AllBookings;
        } catch (error) {
          console.error("getBooking", error)
        }
      },
      actionGetAmenity: async (token) => {
        try {
          //fetch ข้อมูลจากหลังบ้านมา
          const response = await getAmenity(token);
          console.log('response Amenity', response.data.results)
          // เก็บค่าจากหลังบ้านนมา
          set({ allAmenities: response.data.results })
          //return เพื่อส่งกลับไปหน้าที่จะใช้
          return response.data.results;
        } catch (error) {
          console.error("getAmenity", error)
        }
      },
        /* Amenity path Create [POST] เพิมต้องรับค่าอีกตัวด้วย */
        actionCreateAmenity: async (token, name) => {
          try {
            //fetch ข้อมูลจากหลังบ้านมา 2 ตัว
            const response = await createAmenity(token, name);
            console.log('response created', response.data.results)
            // เก็บค่าจากหลังบ้านนมา
            // set(state => ({ createAccomcate: [...state.createAccomcate, response.data] }));
            //return เพื่อส่งกลับไปหน้าที่จะใช้
            return response.data.results;
          } catch (error) {
            console.error("error created", error)
          }
        },
          /* Amenity path deleted  */
          actionDeleteAmenity: async (token, amenityId) => {
            try {
              const response = await deletedAmenity(token, amenityId)
              console.log('response deleted sucess', response)
              set({ allAmenities: 'getAmenity', response })
            } catch (error) {
              console.error("error deleted", error)
            }
          },
            actionUpdateAmenity: async (token, amenityId, name) => {
              try {
                //fetch ข้อมูลจากหลังบ้านมา 2 ตัว
                const response = await updatedAmenity(token, amenityId, name);
                console.log('response Amenity', response.data.results)
                // เก็บค่าจากหลังบ้านนมา
                set(state => ({ allAmenities: [...state.allAmenities, response.data] }));
                //return เพื่อส่งกลับไปหน้าที่จะใช้
                return response.data.results;
              } catch (error) {
                console.error("updatedAmenity", error)
              }
            },

    }),
    
    

    
    {
      name: "admin-storage", // unique name for persisting state
    }
  )
);

export default useAdminStore;