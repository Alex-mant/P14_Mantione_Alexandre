import React from 'react';
import styled from 'styled-components';
import InputSearch from '../InputSearch/InputSearch';
import SetPageSize from '../SetPageSize/SetPageSize';
import AddMockedData from '../utils/AddMockedData';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

/**
 * It's a TableTools component that contains three components: SetPageSize, AddMockedData,
 * and InputSearch.
 * @returns A React component.
 * @param any - gridRef
 */
const TableTools = ({gridRef}) => {
  return (
    <Container>
      <SetPageSize gridRef={gridRef}/>
      <AddMockedData/>
      <InputSearch/>
    </Container>
  );
}

export default TableTools;
