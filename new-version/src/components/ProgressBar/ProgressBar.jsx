import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  div{
    position: relative;
    color: #fff;
    text-align: center;
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
    border-radius: 50%;
    line-height: 18.5px;
  };
  span{
    margin-bottom: 5px;
    width: 60px;
    border: 1px solid #000;
  }
`
/* a progress bar to observe the stages of the form. */
const FormProgressBar = () => {
  const step = useSelector(state => state.formulary.step)
  return (
    <ProgressBar>
      <div style={{backgroundColor: step === 1 ? "#768e12" : "grey"}}>1</div>
      <span></span>
      <div style={{backgroundColor: step === 2 ? "#768e12" : "grey"}}>2</div>
      <span></span>
      <div style={{backgroundColor: step === 3 ? "#768e12" : "grey"}}>3</div>
    </ProgressBar>
  );
  
}

export default FormProgressBar;
