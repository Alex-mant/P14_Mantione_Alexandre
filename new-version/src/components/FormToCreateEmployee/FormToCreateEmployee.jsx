import React from "react";
import DynamicsFields from "../DynamicsFields/DynamicsFields";
import FormMenu from "../FormMenu/FormMenu";

/**
 * FormToCreateEmployee is a function that returns a form with a title, a dynamic field and a form
 * menu.
 * @returns A form with a title, a dynamic field and a form menu.
 * @param string - title
 */
const FormToCreateEmployee = ({ title }) => {
  return (
    <form className="Form flexColumn">
      <h2 className="form_title">{title}</h2>
      <DynamicsFields />
      <FormMenu />
    </form>
  );
};

export default FormToCreateEmployee;
