import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import DynamicsFields from '../DynamicsFields/DynamicsFields';
import FormMenu from '../FormMenu/FormMenu';

const FormToCreateEmployee = ({title}) => {
  const form = useRef()
  // const currentInfo = useSelector(state => state.employee.currentInfo);
  // const step = useSelector(state => state.formulary.step)

  // useEffect(() => {
  //   const allInputs = [...form.current.querySelectorAll('input, select')];
  //   allInputs.forEach((input) => input.value = currentInfo[input.id] )
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [step]);

  return (
    <form ref={form} className='Form flexColumn'>
      <h2 className='form_title'>{title}</h2>
      <DynamicsFields/>
      <FormMenu/>
    </form> 
  );
}

export default FormToCreateEmployee;
