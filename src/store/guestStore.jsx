import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';

const guestStore = create(
  persist(
    (set, get) => ({
      guestSelect: {
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0
      },

      setGuestSelect: (guests) => {
        set({ guestSelect: guests });
      },

      clearGuestSelect: () => {
        set({ 
          guestSelect: {
            adults: 0,
            children: 0,
            infants: 0,
            pets: 0
          }
        });
      },

      incrementCount: (field) => {
        set(
          produce((state) => {
            state.guestSelect[field] += 1;
          })
        );
      },

      decrementCount: (field) => {
        set(
          produce((state) => {
            if (state.guestSelect[field] > 0) {
              state.guestSelect[field] -= 1;
            }
          })
        );
      },

      handleSave: (onSave, onClose) => {
        const { guestSelect } = get();
        onSave(guestSelect);
        onClose();
      },

      updateGuestSelect: (updates) => {
        set(
          produce((state) => {
            state.guestSelect = { ...state.guestSelect, ...updates };
          })
        );
      },
    }),
    {
      name: 'guest-storage',
      partialize: (state) => ({ guestSelect: state.guestSelect }),
    }
  )
);

export default guestStore;
