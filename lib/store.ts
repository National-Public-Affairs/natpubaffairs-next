import { create } from 'zustand';

interface AppState {
  mottoTrigger: boolean;
  reverse: () => void;
}

const useAppStore = create<AppState>()((set) => ({
  mottoTrigger: false,
  reverse: () => set((state) => ({ mottoTrigger: !state.mottoTrigger })),
}));
