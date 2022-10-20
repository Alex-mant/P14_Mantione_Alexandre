import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoFromForm } from "../../utils/getInfoFromForm";
import Select from "react-select";
import { setFormDepartment, setFormState } from "../../redux/feature/formularySlice";

const InputOrSelect = (object) => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.formulary.step);
  const select = object.select;
  const currentInfo = useSelector((state) => state.formulary.currentInfo);
  const currentUserState = useSelector((state) => state.formulary.state);
  const currentUserDepartment =  useSelector((state) => state.formulary.department);
  const placeHolder = () =>
    select.name === "state" ? currentUserState : currentUserDepartment;

  const handleChange = (e, type) => {
    if (type === "input") {
      const target = e.target.parentElement.parentElement;
      const inputs = [...target.querySelectorAll("input")];
      getInfoFromForm(inputs, dispatch, step);
    }
    if (type === "select") {
      getInfoFromForm(e, dispatch, step);
      select.name === "state" ? dispatch(setFormState(e.label)) : select.name === "department" ? dispatch(setFormDepartment(e.label)) : <></>;
    }
  };

  return (
    <>
      <label htmlFor={object.label.for}>{object.label.text}</label>
      {select ? (
        <Select classNamePrefix="react-select" onChange={(e) => handleChange(e, "select")} name={select.name} id={'select'} placeholder={placeHolder()} options={select.options} />
      ) : (
        <input
          onChange={(e) => handleChange(e, "input")}
          type={object.inputType}
          id={object.label.for}
          defaultValue={currentInfo[object.label.for]}
        ></input>
      )}
    </>
  );
};

export default InputOrSelect;
