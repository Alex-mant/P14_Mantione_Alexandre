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
  
  /**
   * If the inputs array is an array, then for each input in the array, if the input's id is equal to
   * "first-name or last-name or date-of-birth", then dispatch the setter action with the input's value, for an example : if the input's id is
   * equal to "last-name", then dispatch the setLastName action with the input's value.
   * @returns Nothing.
   */
  const getEmployeeInfoPart = () => {
    if(Array.isArray(inputs)){
      return inputs.forEach((input) => {
        if (input.id === "first-name") dispatch(setFirstName(input.value));
        if (input.id === "last-name") dispatch(setLastName(input.value));
        if (input.id === "date-of-birth") dispatch(setDateOfBirth(input.value));
      })
    }
  };

  /**
   * It takes an array of inputs and returns a function that dispatches the value of each input to the
   * reducer.
   * @returns Nothing.
   */
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

  /**
   * If the inputs are an array, then loop through the array and dispatch the setStartDate action with
   * the value of the input. If the inputs are not an array, then dispatch the setDepartment action
   * with the value of the input.
   * @returns Nothing.
   */
  const getEmployeeInfoProPart = () => {
    if(Array.isArray(inputs)){
      return inputs.forEach((input) => {
        if (input.id === "start-date") dispatch(setStartDate(input.value));
      })
    }else{
      dispatch(setDepartment(inputs.value));
    }
  };

  /* A function that is called in the component. It is used to dispatch the action to the reducer. */
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
