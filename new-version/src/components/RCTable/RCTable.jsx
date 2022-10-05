import React, { useState } from "react";
import Table from "rc-table";
import { useDispatch, useSelector } from "react-redux";
import { mockedData } from "../../data/mocked/TableMockedData";

import { columns } from "../../data/rcTableColumns";
import ToolsBtnSwitchToMockedData from "../utils/ToolsBtnSwitchToMockedData";

const RCTable = () => {
  const [mocked, setMocked] = useState(false);
  
  const props = {
    data : useSelector((state) => state.employee.List),
    dispatch: useDispatch(),
    mocked: mocked,
  }
   
  return (
    <>
    <div className="table-container">
      <Table columns={columns(props)} data={mocked ? mockedData : props.data} />
    </div>
      <ToolsBtnSwitchToMockedData setMocked={setMocked} mocked={mocked}/>
    </>
  );
};

export default RCTable;
