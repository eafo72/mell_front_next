import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [{"item":1}],
  //funciones 

  //increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //removeAllBears: () => set({ bears: 0 }),
}))