import React from 'react';
import { FormEmployeeAdress } from '../../data/FormEmployeeAdress';
import Fields from '../Fields/Fields';

const FieldSet = ({ClassCss, legendText}) => {
  return (
    <fieldset className={ClassCss}>
      <legend>{legendText}</legend>
      {FormEmployeeAdress.map((field, index) => {
        return <Fields key={index} {...field}/>
      })}
    </fieldset>
  );
}

export default FieldSet;
