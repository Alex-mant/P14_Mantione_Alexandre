import { configureStore } from "@reduxjs/toolkit";
import { FormularySlice } from "../feature/formularySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, FormularySlice.reducer);

export const store = configureStore({
  reducer: {
    formulary: persistedReducer,
  },
});
