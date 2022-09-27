import React, { useState } from 'react';
import FieldSet from '../FieldSet/FieldSet';
import Fields from '../Fields/Fields';
import FormEmployeeCreator from '../../data/FormEmployeeCreator'
import DepartmentOptions from '../DepartmentOptions/DepartmentOptions';
import { isContainEmptyKey } from '../../utils/isContainEmptyKey';
import { modalPop } from '../../utils/modalPop';
import { createNewEmployeeEntries } from '../../utils/createNewEmployeeEntries';
import { msg } from '../../utils/messages';
import { useDispatch } from 'react-redux';
import { getNewEmployee } from '../../redux/feature/employeeSlice';

const FormToCreateEmployee = ({title}) => {
  const legendText = 'Address';
  const fieldSetClass = 'address flexColumn';
  const dispatch = useDispatch();

  const [allEmployeeInfo, setAllEmployeeInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allInputs = [...e.target.querySelectorAll('input, select')];
    const currentEmployeeInfo = {};
    let allEmployeeInfoCopy = [...allEmployeeInfo];
    allInputs.map((input) => createNewEmployeeEntries(input, currentEmployeeInfo));
    allEmployeeInfoCopy.push(currentEmployeeInfo);
    allEmployeeInfoCopy = allEmployeeInfoCopy.filter((obj) => isContainEmptyKey(obj));
    allEmployeeInfo.length === allEmployeeInfoCopy.length ? modalPop(msg.modal.failure) : modalPop(msg.modal.success, allInputs);
    setAllEmployeeInfo(allEmployeeInfoCopy);
    dispatch(getNewEmployee(allEmployeeInfoCopy))
  }

  return (
    <form onSubmit={handleSubmit} className='Form flexColumn'>
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
