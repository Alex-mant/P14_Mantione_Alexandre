import React from 'react';
import styled from 'styled-components';
import InputSearch from '../InputSearch/InputSearch';
import SetPageSize from '../SetPageSize/SetPageSize';
import ToolsBtnSwitchToMockedData from '../utils/ToolsBtnSwitchToMockedData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const TableTools = ({gridRef}) => {
  return (
    <Container>
      <SetPageSize gridRef={gridRef}/>
      <ToolsBtnSwitchToMockedData/>
      <InputSearch/>
    </Container>
  );
}

export default TableTools;
