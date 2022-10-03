import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProInfo } from '../../redux/feature/employeeSlice';
import { setStep } from '../../redux/feature/formularySlice';

const FormButtonPrev = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.formulary.step)
  const payload = {};
  
  const handlePrev = (e) => {
    e.preventDefault();
    const target = e.target.parentElement.parentElement
    const inputs = [...target.querySelectorAll('input, select')];
    step > 1 ? dispatch(setStep(step - 1)) : dispatch(setStep(step))
    if(step <= 3){ 
      inputs.forEach((input) => payload[input.id] = input.value)
      dispatch(getEmployeeProInfo(payload))
    }
  }

  return (
    <button type='button' onClick={handlePrev} className='home_submit-btn' style={{background : step === 1 ? 'grey' : 'green'}}>
          <i className="fas fa-arrow-left"></i>
    </button>

  );
}

export default FormButtonPrev;
