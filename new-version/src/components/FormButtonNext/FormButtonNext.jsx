import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/feature/formularySlice";
import arrowRight from '../../assets/arrow-right.svg'

const FormButtonNext = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);

  const handleNext = (e) => {
    e.preventDefault();
    step < 3 ? dispatch(setStep(step + 1)) : dispatch(setStep(step));
  };

  return (
    <>
      <button aria-label="next step" type="button" onClick={handleNext} className="home_submit-btn">
        <img width={15} height={15} className="arrow-Btn" src={arrowRight} alt="arrow-right" />
      </button>
    </>
  );
};

export default FormButtonNext;
