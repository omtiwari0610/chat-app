import {create} from "zustand";

export const useThemesStore = create((set) => ({
    theme : localStorage.getItem("chat-theme") || "valentine",
    setTheme : (theme) => {
        localStorage.setItem("chat-theme",theme);
        set({theme});
},
}));