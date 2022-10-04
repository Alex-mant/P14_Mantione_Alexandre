import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../../redux/feature/formularySlice';

const FormButtonPrev = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.formulary.step)
  
  const handlePrev = (e) => {
    e.preventDefault();
    step > 1 ? dispatch(setStep(step - 1)) : dispatch(setStep(step))
  }

  return (
    <button type='button' onClick={handlePrev} className='home_submit-btn' disabled={step === 1 ? true : false} style={{background : step === 1 ? 'grey' : 'green'}}>
          <i className="fas fa-arrow-left"></i>
    </button>

  );
}

export default FormButtonPrev;
