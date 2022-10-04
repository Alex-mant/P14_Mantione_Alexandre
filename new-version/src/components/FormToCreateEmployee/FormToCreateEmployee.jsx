import React from 'react';
import DynamicsFields from '../DynamicsFields/DynamicsFields';
import FormMenu from '../FormMenu/FormMenu';

const FormToCreateEmployee = ({title}) => {

  return (
    <form className='Form flexColumn'>
      <h2 className='form_title'>{title}</h2>
      <DynamicsFields/>
      <FormMenu/>
    </form> 
  );
}

export default FormToCreateEmployee;
