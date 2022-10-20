import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList } from '../../redux/feature/formularySlice';
import { filterEmployee } from '../../utils/filterEmployee';
import styled from 'styled-components'; 

const Input = styled.input`
  position: relative;
  bottom: 10px;
  border-radius: "15px"; 
  border-radius: 5px;
  border: .5px solid grey;
  height: 20px;
`
const Legend = styled.p`
  font-size:11px;
  font-style: italic;
  font-weight: 500;
`
const Footnote = styled.span`
  color: red;
  font-size: 16px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const InputSearch = () => {
  const data = useSelector((state) => state.formulary.List);
  const dispatch = useDispatch();
  const placeholder = 'Search an employee here';

  const handleChange = (e) => {
    const inputValue = e.target.value;
    inputValue === "" ? dispatch(setFilteredList(data)) : dispatch(setFilteredList(data.filter((data) => filterEmployee(data, inputValue))));
  };

  return (
    <Container >
      <Legend>
        <Footnote>*</Footnote>
        First-name, Last-name or Department
      </Legend>
      <Input placeholder={placeholder + "*"} onChange={handleChange} />
    </Container>
  );
}

export default InputSearch; 
