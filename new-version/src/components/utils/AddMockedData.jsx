import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addMockedEmployee } from "../../redux/feature/formularySlice";
import { randomEmployee } from "../../utils/randomEmployee";

const ButtonTool = styled.button`
  position: relative;
  top: 20px;
  left: 50%;
  transform: translate(0%, 40%);
  background: #546414;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 15px;
  padding: 5px;
  cursor: pointer;
`

/**
 * When the button is clicked, dispatch an action to add a mocked employee to the store
 * @returns A React component.
 */
const AddMockedData = () => {
  const dispatch = useDispatch();
  /**
   * When the button is clicked, dispatch an action to add a mocked employee to the store.
   */
  const handleClick = () => dispatch(addMockedEmployee(randomEmployee()));

  return (
    <div>
      <ButtonTool onClick={handleClick}>
        Add mocked
      </ButtonTool>
    </div>
  );
}

export default AddMockedData;
