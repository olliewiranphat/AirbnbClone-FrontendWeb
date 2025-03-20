import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { createUnlistWishlist, getWishlistHistory } from '../api/wishlistContoller';

const useWishlistStore = create(
    persist(
      (set, get) => ({
        wishlist: [],
        status: 'idle',
        error: null,
  
        toggleWishlistItem: async (item,token) => {
            
          const originalState = get().wishlist;
          set(
            produce((state) => {
              const existingIndex = state.wishlist.findIndex((i) => i.id === item.id);
              if (existingIndex !== -1) {
                state.wishlist.splice(existingIndex, 1);
              } else {
                state.wishlist.push(item);
              }
            })
          );
  
          try {
            await get().actionCreateUnlistWishlist(token, item);
          } catch (error) {
            console.error('Error syncing with server:', error);
            set({ wishlist: originalState, error: error.message });
          }
        },
  
        actionCreateUnlistWishlist: async (token,item) => {
          try {
            set({ status: 'loading' });
            console.log('Token retrieved in createUnlistWishlist:', token ? 'Token found' : 'Token not found');
            if (!token) throw new Error('Authentication token not found');
  
            await createUnlistWishlist(token, item);
            set({ status: 'succeeded', error: null });
          } catch (error) {
            console.error('Error creating/unlisting wishlist:', error);
            set({
              status: 'failed',
              error: error.response?.data || { message: error.message },
            });
          }
        },
  
        getWishlistHistory: async () => {
          try {
            set({ status: 'loading' });
            const token = localStorage.getItem('authToken');
            console.log('Token retrieved in getWishlistHistory:', token ? 'Token found' : 'Token not found');
            if (!token) throw new Error('Authentication token not found');
  
            const response = await getWishlistHistory(token);
            set({
              status: 'succeeded',
              wishlist: response.data,
              error: null,
            });
          } catch (error) {
            console.error('Error fetching wishlist history:', error);
            set({
              status: 'failed',
              error: error.response?.data || { message: error.message },
            });
          }
        },
      }),
      {
        name: 'wishlist-storage',
        partialize: (state) => ({ wishlist: state.wishlist }),
      }
    )
  );

export default useWishlistStore;
