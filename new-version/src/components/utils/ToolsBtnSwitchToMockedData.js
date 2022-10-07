import React from 'react';
import { useDispatch } from 'react-redux';
import { addMockedEmployee } from "../../redux/feature/formularySlice";
import { randomEmployee } from "../../utils/randomEmployee";

const ToolsBtnSwitchToMockedData = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button style={{position: "absolute", left: "50%", transform: 'translate(-50%, 40%)'}} onClick={() => {dispatch(addMockedEmployee(randomEmployee()))}}>add mocked</button>
    </div>
  );
}

export default ToolsBtnSwitchToMockedData;
