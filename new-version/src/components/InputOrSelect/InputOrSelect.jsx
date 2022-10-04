import React from "react";
import { useSelector } from "react-redux";

const InputOrSelect = (object) => {
  const select = object.select;
  const currentInfo = useSelector(state => state.employee.currentInfo);

  return (
    <>
      <label htmlFor={object.label.for}>{object.label.text}</label>
      {select ? (
        <select name={select.name} id={select.name} defaultValue={currentInfo[select.name]}>
          {select.options ? select.options.map((opt, index) => <option key={index}>{opt.name ? opt.name : ''}</option>) : <></>}
        </select>
      ) : (
        <input type={object.inputType} id={object.label.for} defaultValue={currentInfo[object.label.for]}></input>
      )}
    </>
  );
};

export default InputOrSelect;
