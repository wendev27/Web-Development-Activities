// src/store/useActivityStore.ts
import { create } from "zustand";

interface ActivityState {
  currentActivity: string | null;
  setActivity: (id: string) => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  currentActivity: null,
  setActivity: (id) => set({ currentActivity: id }),
}));
