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
  key: "",
};

export const FormularySlice = createSlice({
  name: "formulary",
  initialState: {
    currentInfo: currentInfoInit,
    List: [],
    filteredList: [],
    isSuccess: false,
    step: 1,
    state: "Select",
    department: "Select",
    placeHolderBirthday: "MM/JJ/YYYY",
    placeHolderStartDate: "MM/JJ/YYYY",
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
        state.filteredList.push(state.currentInfo);
        state.isSuccess = true;
        modalPop("success");
        state.currentInfo = currentInfoInit;
        state.state = "Select";
        state.department = "Select";
        state.placeHolderBirthday = "MM/JJ/YYYY";
        state.placeHolderStartDate = "MM/JJ/YYYY";
      } else {
        state.isSuccess = false;
        modalPop("failure");
      }
    },
    addMockedEmployee: (state, action) => {
      state.List.push(action.payload);
      state.filteredList.push(action.payload);
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
    removeEmployee: (state, action) => {
      state.List = action.payload;
      state.filteredList = action.payload;
    },
    resetState: (state) => {
      state.currentInfo = currentInfoInit;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setFormState: (state, action) => {
      state.state = action.payload;
    },
    setFormDepartment: (state, action) => {
      state.department = action.payload;
    },
    setPlaceHolderBirthDay: (state, action) => {
      state.placeHolderBirthday = action.payload;
    },
    setPlaceHolderStartDate: (state, action) => {
      state.placeHolderStartDate = action.payload;
    },
  },
});

export const {
  addMockedEmployee,
  setFilteredList,
  setPlaceHolderBirthDay,
  setPlaceHolderStartDate,
  setStep,
  setFormState,
  setFormDepartment,
  addNewEmployee,
  removeEmployee,
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
} = FormularySlice.actions;

export default FormularySlice.reducer;
