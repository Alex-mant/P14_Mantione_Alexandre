import React from "react";

const Fields = (object) => {
  const select = object.select;
  return (
    <>
      <label htmlFor={object.label.for}>{object.label.text}</label>
      {select ? (
        <select name={select.name} id={select.name}>
          {select.options ? select.options.map((opt, index) => <option key={index}>{opt.name ? opt.name : ''}</option>) : <></>}
        </select>
      ) : (
        <input type={object.inputType} id={object.label.for}></input>
      )}
    </>
  );
};

export default Fields;
