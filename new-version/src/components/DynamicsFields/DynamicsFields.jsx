import { useSelector } from "react-redux";
import InputOrSelect from "../InputOrSelect/InputOrSelect";
import { FormEmployeeAdress } from "../../data/FormEmployeeAdress";
import { FormEmployeeInfo } from "../../data/FormEmployeeInfo";
import { FormEmployeeProInfo } from "../../data/FormEmployeeProInfo";

const DynamicsFields = () => {
  const step = useSelector((state) => state.formulary.step);
  const array = step === 1 ? FormEmployeeInfo : step === 2 ? FormEmployeeAdress : FormEmployeeProInfo;

  return (
    <div className="formEmployee flexColumn">
      {array.map((field, index) => {
        return <InputOrSelect key={index + new Date().getTime()} {...field} />;
      })}
    </div>
  );
};

export default DynamicsFields;
