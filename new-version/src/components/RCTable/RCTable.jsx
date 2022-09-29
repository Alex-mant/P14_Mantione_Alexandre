import React, { useEffect } from 'react';
import Table from 'rc-table'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { mockedData } from '../../data/mocked/TableMockedData';
// import { mockedData } from '../../data/mocked/TableMockedData';

const RCTable = () => {
  const columnsWidth = 'max-content'
  const TableContainer = styled.div`
  margin: 21.2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const columns = [
    {
      title: 'first-name',
      dataIndex: 'first-name',
      key: 'first-name',
      width: columnsWidth,
    },
    {
      title: 'last-name',
      dataIndex: 'last-name',
      key: 'last-name',
      width: columnsWidth,
    },
    {
      title: 'date-of-birth',
      dataIndex: 'date-of-birth',
      key: 'date-of-birth',
      width: columnsWidth,
    },
    {
      title: 'street',
      dataIndex: 'street',
      key: 'street',
      width: columnsWidth,
    },
    {
      title: 'start-date',
      dataIndex: 'start-date',
      key: 'start-date',
      width: columnsWidth,
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'city',
      width: columnsWidth,
    },
    {
      title: 'state',
      dataIndex: 'state',
      key: 'state',
      width: columnsWidth,
    },
    {
      title: 'zip-code',
      dataIndex: 'zip-code',
      key: 'zip-code',
      width: columnsWidth,
    },
    {
      title: 'department',
      dataIndex: 'department',
      key: 'department',
      width: columnsWidth,
    },
  ];

  const rcTableCaseToUpperCase = () => {
    const cells = [...document.querySelectorAll('.rc-table-cell')].slice(0,9)
    cells.forEach((cell) => cell.innerText = cell.innerText.toUpperCase());
  }

  useEffect(() => {
    rcTableCaseToUpperCase()
  }, []);

  const data = useSelector(state => state.employee.employeeList);
  console.log(data);

  return (
    <TableContainer>
      <Table columns={columns} data={mockedData}/>
    </TableContainer>
  );
}

export default RCTable;
