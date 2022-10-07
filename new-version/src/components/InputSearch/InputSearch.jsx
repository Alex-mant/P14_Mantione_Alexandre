import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList } from '../../redux/feature/formularySlice';
import { filterEmployee } from '../../utils/filterEmployee';
import styled from 'styled-components'; 

const Input = styled.input`
  margin: 15px 0 5px;
  border-radius: 5px;
  border: none;
  height: 20px;
`

const InputSearch = ({isMocked}) => {
  const data = useSelector((state) => state.formulary.List);
  const dispatch = useDispatch();
  const placeholder = 'Search an employee here';

   
  const handleChange = (e) => {
    const inputValue = e.target.value;
    dispatch(setFilteredList(data.filter((data) => filterEmployee(data, inputValue))));
    if (inputValue === "") dispatch(setFilteredList(data));
  };

  return (
    <Input placeholder={placeholder} onChange={handleChange} />
  );
}

export default InputSearch; 
