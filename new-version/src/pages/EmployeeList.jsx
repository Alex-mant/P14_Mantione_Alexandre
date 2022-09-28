import React from 'react';
import Table from 'rc-table'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const EmployeeList = () => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'first-name',
      key: 'first-name',
      width: 100,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 200,
    },
    {
      title: 'Operations',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Delete</a>,
    },
  ];

  const data = useSelector(state => state.employee.employeeList);

  const Test = styled.div`
    margin-top: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  return (
    <Test>
      <Table columns={columns} data={data}/>
    </Test>
  );
}

export default EmployeeList;
