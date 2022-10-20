import { configureStore } from "@reduxjs/toolkit";
import { FormularySlice } from "../feature/formularySlice";

export const store = configureStore({
  reducer: {
    formulary: FormularySlice.reducer,
  },
});
