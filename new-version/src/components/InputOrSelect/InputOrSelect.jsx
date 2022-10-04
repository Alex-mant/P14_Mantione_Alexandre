import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoFromForm } from "../../utils/getInfoFromForm";

const InputOrSelect = (object) => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.formulary.step);
  const select = object.select;
  const currentInfo = useSelector(state => state.employee.currentInfo);

  const handleChange = (e) => {
    const target = e.target.parentElement.parentElement
    const inputs = [...target.querySelectorAll('input, select')];
    getInfoFromForm(inputs, dispatch, step );
  }

  return (
    <>
      <label htmlFor={object.label.for}>{object.label.text}</label>
      {select ? (
        <select onChange={handleChange} name={select.name} id={select.name} defaultValue={currentInfo[select.name]}>
          {select.options ? select.options.map((opt, index) => <option key={index}>{opt.name ? opt.name : ''}</option>) : <></>}
        </select>
      ) : (
        <input onChange={handleChange} type={object.inputType} id={object.label.for} defaultValue={currentInfo[object.label.for]}></input>
      )}
    </>
  );
};

export default InputOrSelect;
