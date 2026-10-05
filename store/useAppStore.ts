import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  language: 'vi' | 'en';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (lang: 'vi' | 'en') => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  language: 'vi',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));
