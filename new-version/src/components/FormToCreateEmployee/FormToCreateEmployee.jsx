import React, { useRef } from 'react';
import FieldSet from '../FieldSet/FieldSet';
import Fields from '../Fields/Fields';
import FormEmployeeCreator from '../../data/FormEmployeeCreator'
import DepartmentOptions from '../DepartmentOptions/DepartmentOptions';
import { modalPop } from '../../utils/modalPop';
import { createNewEmployeeEntries } from '../../utils/createNewEmployeeEntries';
import { useDispatch } from 'react-redux';
import { getNewEmployee } from '../../redux/feature/employeeSlice';
import { isContainEmptyKey } from '../../utils/isContainEmptyKey';

const FormToCreateEmployee = ({title}) => {
  const form = useRef()
  const dispatch = useDispatch();
  const legendText = 'Address';
  const fieldSetClass = 'address flexColumn';

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputs = [...form.current.querySelectorAll('input, select')];
    const currentEmployeeInfo = {};
    allInputs.forEach((input) => createNewEmployeeEntries(input, currentEmployeeInfo));
    if (isContainEmptyKey(currentEmployeeInfo)){
      modalPop('failure') 
    } else{
      dispatch(getNewEmployee(currentEmployeeInfo))
      modalPop('success', form)
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className='Form flexColumn'>
      <h2 className='form_title'>{title}</h2>
      <div className='formEmployee flexColumn'>
        {FormEmployeeCreator.map((field, index) => {
          return <Fields key={index} {...field}/>
        })}
      </div>
      <FieldSet ClassCss={fieldSetClass} legendText={legendText}/>
      <DepartmentOptions/>
      <button type='submit' className='home_submit-btn'>Save</button>
    </form>
  );
}

export default FormToCreateEmployee;
