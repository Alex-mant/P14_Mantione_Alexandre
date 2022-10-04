import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "../feature/employeeSlice";
import { FormularySlice } from "../feature/formularySlice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice.reducer,
    formulary: FormularySlice.reducer,
  },
});
