import React from "react";
import Table from "rc-table";
import { useDispatch, useSelector } from "react-redux";

import { columns } from "../../data/rcTableColumns";
import ToolsBtnSwitchToMockedData from "../utils/ToolsBtnSwitchToMockedData";
import InputSearch from "../InputSearch/InputSearch";


const RCTable = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.formulary.List);
  const tableStyle = 'display: flex; justify-content: center';  
  const filteredList = useSelector(state => state.formulary.filteredList);

  return (
    <>
      <Table style={{tableStyle}} columns={columns({dispatch, data})} data={filteredList} />
      <InputSearch/>
      <ToolsBtnSwitchToMockedData />
    </>
  );
};

export default RCTable;
