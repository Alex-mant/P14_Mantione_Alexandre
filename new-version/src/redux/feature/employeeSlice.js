import { createSlice } from "@reduxjs/toolkit";
import { isContainEmptyKey } from "../../utils/isContainEmptyKey";
import { modalPop } from "../../utils/modalPop";

const currentInfoInit = {
  "first-name": "",
  "last-name": "",
  "date-of-birth": "",
  street: "",
  city: "",
  state: "",
  "zip-code": "",
  "start-date": "",
  department: "",
  key:'',
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    currentInfo: currentInfoInit,
    List: [],
  },
  reducers: {
    setFirstName: (state, action) => {
      state.currentInfo["first-name"] = action.payload;
    },
    setLastName: (state, action) => {
      state.currentInfo["last-name"] = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.currentInfo["date-of-birth"] = action.payload;
    },
    setStreet: (state, action) => {
      state.currentInfo["street"] = action.payload;
    },
    setCity: (state, action) => {
      state.currentInfo["city"] = action.payload;
    },
    setState: (state, action) => {
      state.currentInfo["state"] = action.payload;
    },
    setZipCode: (state, action) => {
      state.currentInfo["zip-code"] = action.payload;
    },
    setStartDate: (state, action) => {
      state.currentInfo["start-date"] = action.payload;
    },
    setDepartment: (state, action) => {
      state.currentInfo["department"] = action.payload;
      state.currentInfo.key = new Date().getTime();
    },
    addNewEmployee: (state) => {
      if (!isContainEmptyKey(state.currentInfo)) {
        state.List.push(state.currentInfo);
        modalPop("success");
        state.currentInfo = currentInfoInit;
      } else {
        modalPop("failure");
      }
    },
    resetState: (state) => {
      state.currentInfo = currentInfoInit;
    },
  },
});

export const {
  addNewEmployee,
  resetState,
  setCity,
  setDateOfBirth,
  setDepartment,
  setFirstName,
  setLastName,
  setStartDate,
  setState,
  setStreet,
  setZipCode,
} = employeeSlice.actions;

export default employeeSlice.reducer;
