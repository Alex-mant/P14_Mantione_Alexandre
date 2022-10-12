import React from 'react';
import { useDispatch } from 'react-redux';
import { addMockedEmployee } from "../../redux/feature/formularySlice";
import { randomEmployee } from "../../utils/randomEmployee";

const ToolsBtnSwitchToMockedData = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button style={{position: "relative", top: '20px' ,left: "50%", transform: 'translate(0%, 40%)', background:'#546414',color:'#fff', border:"1px solid transparent", borderRadius:"15px", padding: "5px", cursor: 'pointer'}} 
      onClick={() => {dispatch(addMockedEmployee(randomEmployee()))}}>Add mocked</button>
    </div>
  );
}

export default ToolsBtnSwitchToMockedData;
