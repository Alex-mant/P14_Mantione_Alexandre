import React, { useEffect } from "react";
import Table from "rc-table";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { mockedData } from "../../data/mocked/TableMockedData";
import { rcTableCaseToUpperCase } from "../../utils/rcTableCaseToUpperCase";
import { columns } from "../../data/rcTableColumns";


const RCTable = () => {
  useEffect(() => {
    rcTableCaseToUpperCase();
  }, []);

  const data = useSelector((state) => state.employee.List);
  console.log(data);

  return (
    <div className="table-container">
      <Table columns={columns} data={mockedData} />
    </div>
  );
};

export default RCTable;
