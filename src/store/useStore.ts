import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface StoreState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'my-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
