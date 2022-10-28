import React from "react";
import { FormDepartmentSelector } from "../../data/FormDepartmentSelector";
import Fields from "../Fields/Fields";

/**
 * It's a function that returns a div that contains a Field component that contains a
 * FormDepartmentSelector object.
 * @returns A component that renders a Field component with the FormDepartmentSelector object as props.
 */
const DepartmentOptions = () => {
  return (
    <div className="departmentOpt">
      <Fields {...FormDepartmentSelector} />
    </div>
  );
};

export default DepartmentOptions;
