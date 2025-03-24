import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { createUnlistWishlist, getWishlistHistory } from '../api/wishlistContoller';

const useWishlistStore = create(
    persist(
        (set, get) => ({
            wishlist: [], // ต้องเป็น array ว่าง
            status: 'idle',
            error: null,

            toggleWishlistItem: async (item, token) => {
                const originalState = get().wishlist;
                set(
                    produce((state) => {
                        if (!Array.isArray(state.wishlist)) {
                            state.wishlist = []; // กำหนดให้เป็น array ว่างหากไม่ใช่ array
                        }
                        const existingIndex = state.wishlist.findIndex((i) => i.accommodationID === item.accommodationID);
                        if (existingIndex !== -1) {
                            state.wishlist.splice(existingIndex, 1); // ลบรายการออกจาก Wishlist
                        } else {
                            state.wishlist.push(item); // เพิ่มรายการไปยัง Wishlist
                        }
                    })
                );

                try {
                    await get().actionCreateUnlistWishlist(token, item); // เรียก API เพื่ออัปเดต Wishlist
                } catch (error) {
                    console.error('Error syncing with server:', error);
                    set({ wishlist: originalState, error: error.message });
                }
            },

            actionCreateUnlistWishlist: async (token, item) => {
                try {
                    set({ status: 'loading' });
                    if (!token) throw new Error('Authentication token not found');

                    await createUnlistWishlist(token, item); // เรียก API
                    set({ status: 'succeeded', error: null });
                } catch (error) {
                    console.error('Error creating/unlisting wishlist:', error);
                    set({
                        status: 'failed',
                        error: error.response?.data || { message: error.message },
                    });
                }
            },

            getWishlistHistory: async (token) => {
                try {
                    set({ status: 'loading' });
                    if (!token) throw new Error('Authentication token not found');

                    const response = await getWishlistHistory(token);
                    console.log("Response in wishlist:", response)
                    if (Array.isArray(response.data)) { // ตรวจสอบว่า response.data เป็น array
                        set({
                            status: 'succeeded',
                            wishlist: response.data,
                            error: null,
                        });
                    } else {
                        throw new Error('Invalid data format from API');
                    }
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