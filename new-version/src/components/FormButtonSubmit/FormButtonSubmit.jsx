import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewEmployee } from '../../redux/feature/employeeSlice';
import { setStep } from '../../redux/feature/formularySlice';
import { getInfoFromForm } from '../../utils/getInfoFromForm';

const FormButtonSubmit = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) =>  {
    const target = e.target.parentElement.parentElement;
    const inputs = [...target.querySelectorAll('input, select')];

    e.preventDefault();
    getInfoFromForm('submit', inputs, dispatch)
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
