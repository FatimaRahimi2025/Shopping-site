import { create } from "zustand";

export const useStore = create((set) => ({
    access_token: null,
    access_refresh: null,
    setState: (data) => 
        set({
            access_token: data?.access_token,
            refresh_token: data?.refresh_token,
        }),
        removeState: () => set({ access_token: null, access_refresh: null }),
}));

