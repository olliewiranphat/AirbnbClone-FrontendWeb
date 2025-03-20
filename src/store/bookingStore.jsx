import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';

const bookingStore = create(
  persist(
    (set) => ({
      bookingSelect: {},

      setBookingSelect: (booking) => {
        set({ bookingSelect: booking });
      },

      clearBookingSelect: () => {
        set({ bookingSelect: {} });
      },

      updateBookingSelect: (updates) => {
        set(
          produce((state) => {
            state.bookingSelect = { ...state.bookingSelect, ...updates };
          })
        );
      },
    }),
    {
      name: 'booking-storage',
      partialize: (state) => ({ bookingSelect: state.bookingSelect }), // บันทึกเฉพาะ bookingSelect
    }
  )
);

export default bookingStore;