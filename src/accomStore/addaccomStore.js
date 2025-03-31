import { create } from "zustand";
import { persist } from "zustand/middleware";
import AllAccom from "../pages/admin-pages/AllAccom";
import { getAccom, getAccomById } from "../api/accomApi";

const useAccomStore = create(persist((set) => ({

    formData: {
        title: "",
        description: "",
        typeOfAccom: "PRIVATEROOM",
        img: [],
        imgBeds: [],
        imgBaths: [],
        availQTY: 1,
        numBedrooms: 1,
        numBathrooms: 1,
        maxGuests: 1,
        pricePerNight: "",
        addressDetail: "",
        city: "",
        country: "",
        latitude: "",
        longitude: "",
        categoryAccom: [],
        selectedAmenities: [],
    },
    selectAccomEdit:{},
    accommodations: [],
    resetFormData: () => set({ formData: {
        title: "",
        description: "",
        typeOfAccom: "PRIVATEROOM",
        img: [],
        imgBeds: [],
        imgBaths: [],
        availQTY: 1,
        numBedrooms: 1,
        numBathrooms: 1,
        maxGuests: 1,
        pricePerNight: "",
        addressDetail: "",
        city: "",
        country: "",
        latitude: "",
        longitude: "",
        categoryAccom: [],
        selectedAmenities: [],
    } }),
    fetchData: async (token) => {
        const response = await getAccom(token);
        set({ accommodations: response.data.allMyAccom });
    },
    fetchDataById: async (token,accommodationID) => {
        const response = await getAccomById(token, accommodationID);
        console.log('response.data.allMyAccom[0]', response.data.allMyAccom[0])
        set({ selectAccomEdit: response.data.allMyAccom[0] });
    },
        
    formDataByField: (newData, field) => set((state) => ({formData : {...state.formData, [field]: newData}})),
    formDataImgByField: (newData, field) => set((state) => ({formData : {...state.formData, img: [...state.formData.img, {[field]: newData}]}})),
    // formDataImgByFieldEdit: (newData, field) => set((state) => ({selectAccomEdit : {...state.selectAccomEdit, img: [...state.selectAccomEdit.img, {[field]: newData}]}})),
    setFormData: (newData) => set((state) => ({ formData: { ...state.formData, ...newData } })),
    setDeleteImage: (index, field) => set((state) => ({ formData: { ...state.formData, [field]: state.formData[field].filter((_, i) => i !== index) } })),
    setDeleteImageEdit: (index, field) => set((state) => ({ selectAccomEdit: { ...state.selectAccomEdit, [field]: state.selectAccomEdit[field].filter((_, i) => i !== index) } })),
    // setDeleteImage: (index) => set((state) => ({ formData: { ...state.formData, img: state.formData.img.filter((_, i) => i !== index) } })),
    setSelectAccomEdit: (id) => set((state) => ({ selectAccomEdit: state.accommodations.find((accom) => accom.accommodationID === id) })),
    setHandleChangeEdit: (name, value) => set((state) => ({ selectAccomEdit: { ...state.selectAccomEdit, [name]: value } }),),
    setAccommodations: (data) => set({ accommodations: data }),
}),
    {
      name: "accommodation-store",
      getStorage: () => localStorage,
    }
));

export default useAccomStore;
