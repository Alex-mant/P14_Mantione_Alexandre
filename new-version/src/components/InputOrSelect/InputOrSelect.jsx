import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoFromForm } from "../../utils/getInfoFromForm";
import DatePickerPlugin from "../DatePickerPlugin/DatePickerPlugin";
import SelectPlugin from "../SelectPlugin/SelectPlugin";

const InputOrSelect = (object) => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);
  const select = object.select;
  const currentInfo = useSelector((state) => state.formulary.currentInfo);
  
  const handleChange = (e) => {
    const target = e.target.parentElement.parentElement;
    const inputs = [...target.querySelectorAll("input")];
    getInfoFromForm(inputs, dispatch, step);
  };

  return (
    <>
      <label htmlFor={object.label.for}>{object.label.text}</label>
      {select ? 
        <SelectPlugin object={object}/>
        : object.inputType === 'date' ? <DatePickerPlugin id={object.label.for}/> :
        <input
          onChange={(e) => handleChange(e)}
          type={object.inputType}
          id={object.label.for}
          defaultValue={currentInfo[object.label.for]}
        ></input>
      }
    </>
  );
};

export default InputOrSelect;
