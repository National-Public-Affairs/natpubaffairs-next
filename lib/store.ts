import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
  mottoTrigger: boolean;
  reverse: () => void;
}

interface Actions {
  reverse: () => void;
}

const useStore = create<AppState & Actions>()(devtools((set) => ({
  mottoTrigger: false,
  // eslint-disable-next-line no-unused-vars
  reverse: () => set((state) => ({ mottoTrigger: true })),
})));

export default useStore;
