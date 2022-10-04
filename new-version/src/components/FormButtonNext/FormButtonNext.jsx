import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/feature/formularySlice";

const FormButtonNext = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);

  const handleNext = (e) => {
    e.preventDefault();
    step < 3 ? dispatch(setStep(step + 1)) : dispatch(setStep(step));
  };

  return (
    <>
      <button type="button" onClick={handleNext} className="home_submit-btn">
        <i className="fas fa-arrow-right"></i>
      </button>
    </>
  );
};

export default FormButtonNext;
