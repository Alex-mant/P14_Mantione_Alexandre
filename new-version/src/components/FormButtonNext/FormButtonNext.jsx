import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getEmployeeAdress, getEmployeeInfo } from '../../redux/feature/employeeSlice';
import { setStep } from '../../redux/feature/formularySlice';

const FormButtonNext = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.formulary.step)
  const payload = {};

  const handleNext = (e) => {
    e.preventDefault();
    const target = e.target.parentElement.parentElement
    const inputs = [...target.querySelectorAll('input, select')];
    step < 3 ? dispatch(setStep(step + 1)) : dispatch(setStep(step));
    if(step === 1){
      inputs.forEach((input) => payload[input.id] = input.value);
      dispatch(getEmployeeInfo(payload));
    }
    if(step === 2){
      inputs.forEach((input) => payload[input.id] = input.value);
      dispatch(getEmployeeAdress(payload));
    }
  } 

  return (
    <>
      <button 
        type='button'
        onClick={handleNext}
        className='home_submit-btn'>
      <i className="fas fa-arrow-right"></i>
      </button>
    </>
  );
}

export default FormButtonNext;
