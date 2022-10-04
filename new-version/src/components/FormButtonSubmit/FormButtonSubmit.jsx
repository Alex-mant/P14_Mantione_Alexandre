import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewEmployee } from '../../redux/feature/employeeSlice';
import { setStep } from '../../redux/feature/formularySlice';

const FormButtonSubmit = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) =>  {
    e.preventDefault();
    dispatch(addNewEmployee())
    dispatch(setStep(1));
  }

  return (
    <button
          onClick={handleSubmit}
          type='submit'
          className='home_submit-btn'>
            Envoyer
    </button>
  );
}

export default FormButtonSubmit;
