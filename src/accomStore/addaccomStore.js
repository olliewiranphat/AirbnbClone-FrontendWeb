import { create } from "zustand";
import { persist } from "zustand/middleware";

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
    formDataByField: (newData, field) => set((state) => ({formData : {...state.formData, [field]: newData}})),
    formDataImgByField: (newData, field) => set((state) => ({formData : {...state.formData, img: [...state.formData.img, {[field]: newData}]}})),
    setFormData: (newData) => set((state) => ({ formData: { ...state.formData, ...newData } })),
    setDeleteImage: (index) => set((state) => ({ formData: { ...state.formData, img: state.formData.img.filter((_, i) => i !== index) } })),
}),
    {
      name: "accommodation-store",
      getStorage: () => localStorage,
    }
));

export default useAccomStore;
