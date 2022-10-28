import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/feature/formularySlice";
import arrowRight from '../../assets/arrow-right.svg'

/**
 * It's a button that when clicked, it will go to the next step of the form.
 * @returns A button with an onClick event handler that will dispatch an action to the redux store.
 */
const FormButtonNext = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);

 /**
  * If the step is less than 3, then dispatch the setStep function with the step plus 1, otherwise
  * dispatch the setStep function with the step.
  */
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
