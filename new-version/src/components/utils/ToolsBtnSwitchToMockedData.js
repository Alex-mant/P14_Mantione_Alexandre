import React from 'react';

const ToolsBtnSwitchToMockedData = ({setMocked, mocked}) => {
  return (
    <div>
      <button style={{position: "absolute", left: "50%", transform: 'translate(-50%, 40%)'}} onClick={() => {
        setMocked(!mocked)
      }}>Data/Mocked</button>
    </div>
  );
}

export default ToolsBtnSwitchToMockedData;
