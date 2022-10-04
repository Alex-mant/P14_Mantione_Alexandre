import React from "react";
import { useSelector } from "react-redux";
import FormButtonNext from "../FormButtonNext/FormButtonNext";
import FormButtonPrev from "../FormButtonPrev/FormButtonPrev";
import FormButtonSubmit from "../FormButtonSubmit/FormButtonSubmit";
import ProgressBar from "../ProgressBar/ProgressBar";

const FormMenu = () => {
  const step = useSelector((state) => state.formulary.step);
  return (
    <div className="form-menu">
      <FormButtonPrev />
      <ProgressBar />
      {step === 3 ? <FormButtonSubmit /> : <FormButtonNext />}
    </div>
  );
};

export default FormMenu;
