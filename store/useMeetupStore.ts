import { create } from 'zustand';

interface MeetupState {
  activeMeetups: any[];
  setActiveMeetups: (meetups: any[]) => void;
}

export const useMeetupStore = create<MeetupState>((set) => ({
  activeMeetups: [],
  setActiveMeetups: (meetups) => set({ activeMeetups: meetups }),
}));
