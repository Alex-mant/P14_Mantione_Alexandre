import { useSelector } from "react-redux";
import InputOrSelect from "../InputOrSelect/InputOrSelect";
import { FormEmployeeAdress } from "../../data/FormEmployeeAdress";
import { FormEmployeeInfo } from "../../data/FormEmployeeInfo";
import { FormEmployeeProInfo } from "../../data/FormEmployeeProInfo";

/**
 * It's a React component that renders a fieldset with a legend and a list of inputs or selects.
 * The inputs and selects are rendered by the InputOrSelect component.
 * The inputs and selects are defined in the FormEmployeeInfo, FormEmployeeAdress and
 * FormEmployeeProInfo arrays.
 * The array that is used is determined by the step variable.
 * The step variable is determined by the Redux store.
 * The Redux store is updated by the Formulary component.
 * The Formulary component is rendered by the App component.
 * The App component is rendered by the index.js file.
 * The index.js file is the entry point of the application.
 * @returns An array of InputOrSelect components.
 */
const DynamicsFields = () => {
  const step = useSelector((state) => state.formulary.step);
  const array = step === 1 ? FormEmployeeInfo : step === 2 ? FormEmployeeAdress : FormEmployeeProInfo;

  return (
    <fieldset className="formEmployee flexColumn">
      <legend>{step === 1 ? 'Employee infos' : step === 2 ? 'Employee address' : 'Employee infos Pro'}</legend>
        {array.map((field, index) => {
          return <InputOrSelect key={index + new Date().getTime()} {...field} />;
        })}
    </fieldset>
  );
};

export default DynamicsFields;
