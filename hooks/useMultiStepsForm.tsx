import { create } from "zustand";


interface useMultiStepsProps {
  step:number;
  next:number;
  setStep:(step:number)=>void;
  previous:number;
  setNext:()=>void;
  setPrevious:()=>void;


}

export const useMultiStepsForm = create<useMultiStepsProps>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  next: 2,
  setNext: () => set((state) => ({ step: state.step + 1 })),
  previous: 0,
  setPrevious: () => set((state) => ({ step: state.step - 1 })),
}));