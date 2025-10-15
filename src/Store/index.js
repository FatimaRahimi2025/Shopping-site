import { create } from "zustand";

export const useStore = create((set) => ({
    access_token: null,
    access_refresh: null,
    setState: (data) => 
        set({
            access_token: data?.access_token,
            access_refresh: data?.access_refresh,
        }),
        removeState: () => set({ access_token: null, access_refresh: null }),
}));

