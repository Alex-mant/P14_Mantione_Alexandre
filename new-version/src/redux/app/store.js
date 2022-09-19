import { configureStore } from "@reduxjs/toolkit";
import { employeeListSlice } from "../feature/employeeSlice";


export const store = configureStore({
  reducer:{
    employee: employeeListSlice.reducer,
  }
})
