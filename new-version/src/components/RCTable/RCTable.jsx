import React, { useEffect } from "react";
import Table from "rc-table";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { mockedData } from "../../data/mocked/TableMockedData";
import { rcTableCaseToUpperCase } from "../../utils/rcTableCaseToUpperCase";
import { columns } from "../../data/rcTableColumns";

const RCTable = () => {
  const TableContainer = styled.div`
    margin: 21.2% auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  useEffect(() => {
    rcTableCaseToUpperCase();
  }, []);

  const data = useSelector((state) => state.employee.List);
  console.log(mockedData);

  return (
    <TableContainer>
      <Table columns={columns} data={data} />
    </TableContainer>
  );
};

export default RCTable;
