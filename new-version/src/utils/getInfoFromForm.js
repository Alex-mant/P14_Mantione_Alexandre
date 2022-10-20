import {
  setCity,
  setDateOfBirth,
  setDepartment,
  setFirstName,
  setLastName,
  setStartDate,
  setState,
  setStreet,
  setZipCode,
} from "../redux/feature/formularySlice";

export const getInfoFromForm = (inputs, dispatch, step) => {
  const getEmployeeInfoPart = () => {
    if(Array.isArray(inputs)){
      return inputs.forEach((input) => {
        if (input.id === "first-name") dispatch(setFirstName(input.value));
        if (input.id === "last-name") dispatch(setLastName(input.value));
        if (input.id === "date-of-birth") dispatch(setDateOfBirth(input.value));
      })
    }
  };
  const getEmployeeAdressPart = () => {
    if(Array.isArray(inputs)){
      return inputs.forEach((input) => {
        if (input.id === "street") dispatch(setStreet(input.value));
        if (input.id === "city") dispatch(setCity(input.value));
        if (input.id === "zip-code") dispatch(setZipCode(input.value));
      })
    }else{
      dispatch(setState(inputs.value));
    }
  };
  const getEmployeeInfoProPart = () => {
    if(Array.isArray(inputs)){
      return inputs.forEach((input) => {
        if (input.id === "start-date") dispatch(setStartDate(input.value));
      })
    }else{
      dispatch(setDepartment(inputs.value));
    }
  };

  if (step === 1) {
    getEmployeeInfoPart();
  }
  if (step === 2) {
    getEmployeeAdressPart();
  }
  if (step === 3) {
    getEmployeeInfoProPart();
  }
};
