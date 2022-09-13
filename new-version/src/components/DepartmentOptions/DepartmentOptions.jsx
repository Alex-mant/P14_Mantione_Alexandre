import React from 'react';
import { FormDepartmentSelector } from '../../data/FormDepartmentSelector';
import Fields from '../Fields/Fields';

const DepartmentOptions = () => {
  return (
    <div className='departmentOpt'>
      <Fields {...FormDepartmentSelector}/>
    </div>
  );
}

export default DepartmentOptions;
