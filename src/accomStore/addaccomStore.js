import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAccomStore = create(persist((set) => ({

    formData: {
        title: "",
        description: "",
        typeOfAccom: "",
        img: [],
        availQTY: "",
        numBedrooms: "",
        numBathrooms: "",
        maxGuests: "",
        pricePerNight: "",
        addressDetail: "",
        city: "",
        country: "",
        latitude: "",
        longitude: "",
        categoryAccom: [],
        selectedAmenities: [],
    },
    formDataByFIeld: (newData, field) => set((state) => ({formData : {...state.formData, [field]: newData}})),
    setFormData: (newData) => set((state) => ({ formData: { ...state.formData, ...newData } })),
    setDeleteImage: (index) => set((state) => ({ formData: { ...state.formData, img: state.formData.img.filter((_, i) => i !== index) } })),
}),
    {
      name: "accommodation-store",
      getStorage: () => localStorage,
    }
));

export default useAccomStore;
