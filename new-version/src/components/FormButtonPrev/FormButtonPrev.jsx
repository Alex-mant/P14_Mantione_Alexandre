import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/feature/formularySlice";
import arrowLeft from '../../assets/arrow-left.svg'

const FormButtonPrev = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);
  const isDisabled = step === 1 ? " home_submit-btn disabled" : "home_submit-btn";
  /**
   * If the step is greater than 1, then set the step to the step minus 1, otherwise set the step to
   * the step.
   */
  const handlePrev = (e) => {
    e.preventDefault();
    step > 1 ? dispatch(setStep(step - 1)) : dispatch(setStep(step));
  };

  return (
    <button
      type="button"
      aria-label="previous step"
      onClick={handlePrev}
      className={isDisabled}
      disabled={step === 1 ? true : false}
    >
      <img width={15} height={15} className="arrow-Btn" src={arrowLeft} alt="arrow-left" />
    </button>
  );
};

export default FormButtonPrev;
