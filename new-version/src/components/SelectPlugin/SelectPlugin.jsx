import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { setFormDepartment, setFormState } from '../../redux/feature/formularySlice';
import { getInfoFromForm } from '../../utils/getInfoFromForm';

const SelectPlugin = ({object}) => {
  const dispatch = useDispatch();
  const select = object.select;
  const placeHolder = () => 
  select.name === "state" ? currentUserState : currentUserDepartment;
  const step = useSelector((state) => state.formulary.step);
  const currentUserState = useSelector((state) => state.formulary.state);
  const currentUserDepartment =  useSelector((state) => state.formulary.department);

  /**
   * If the select.name is state, then set the form state to the label of the event, otherwise if the
   * select.name is department, then set the form department to the label of the event.
   */
  const handleChange = (e) => {
    getInfoFromForm(e, dispatch, step);
    select.name === "state" ? dispatch(setFormState(e.label)) : select.name === "department" && dispatch(setFormDepartment(e.label));
  }

  return (
    <Select classNamePrefix="react-select" onChange={(e) => handleChange(e)} name={select.name} id={'select'} placeholder={placeHolder()} options={select.options} />
  );
}

export default SelectPlugin;
