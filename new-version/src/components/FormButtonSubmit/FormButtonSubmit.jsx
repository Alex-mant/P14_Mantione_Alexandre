import React from "react";
import { useDispatch } from "react-redux";
import { addNewEmployee } from "../../redux/feature/employeeSlice";
import { setStep } from "../../redux/feature/formularySlice";
import check from '../../assets/check.svg'

const FormButtonSubmit = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewEmployee());
    dispatch(setStep(1));
  };

  return (
    <button onClick={handleSubmit} aria-label="Valid formulary" type="submit" className="home_submit-btn">
      <img width={15} height={15} className="arrow-Btn" src={check} alt="check icon" />
    </button>
  );
};

export default FormButtonSubmit;
