import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEmployee, getEmployeeProInfo, resetState } from '../../redux/feature/employeeSlice';
import { setStep } from '../../redux/feature/formularySlice';

const FormButtonSubmit = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.formulary.step)

  const handleSubmit = (e) =>  {
    const target = e.target.parentElement.parentElement;
    const inputs = [...target.querySelectorAll('input, select')];
    const payload = {};
    e.preventDefault();
    if(step === 3){
      inputs.forEach((input) => payload[input.id] = input.value);
      dispatch(getEmployeeProInfo(payload));
    }
    dispatch(addNewEmployee())
    dispatch(resetState());
    dispatch(setStep(1));
    target.reset();
    
  }

  // NE PAS RESET QUAND MANQUE INFO //AFFICHER MODAL QUAND SUCCESS ! // REFACTO !
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
