import React from 'react';
import FieldSet from '../FieldSet/FieldSet';
import Fields from '../Fields/Fields';
import FormEmployeeCreator from '../../data/FormEmployeeCreator'
import DepartmentOptions from '../DepartmentOptions/DepartmentOptions';

const FormToCreateEmployee = ({title}) => {
  const legendText = 'Address';
  const fieldSetClass = 'address flexColumn';

  return (
    <div className='Form flexColumn'>
      <h2 className='form_title'>{title}</h2>
      <div className='formEmployee flexColumn'>
        {FormEmployeeCreator.map((field, index) => {
          return <Fields key={index} {...field}/>
        })}
      </div>
      <FieldSet ClassCss={fieldSetClass} legendText={legendText}/>
      <DepartmentOptions/>      
    </div>
  );
}

export default FormToCreateEmployee;
