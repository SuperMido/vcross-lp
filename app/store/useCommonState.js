import { create } from "zustand";

const useCommonState = create((set) => ({
  isWidgetLoading: false,
  setWidgetLoading: (status) =>
    set((state) => ({
      ...state,
      isWidgetLoading: status,
    })),
}));

export { useCommonState };
