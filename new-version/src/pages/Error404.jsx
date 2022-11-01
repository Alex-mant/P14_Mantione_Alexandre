import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  h2{
    font-size: 40px;
    margin-bottom: 0;
  }
  p{
    font-size: 20px;
  }
  a{
    text-decoration: none;
    color: #000;
    &:hover{
      color: #768E12;
    }
  }
`

const Error404 = () => {
  return (
    <PageContainer id='Error404'>
      <h2>Error 404</h2>
      <p>Oops 404 - this page doesn't exist or it has been removed</p>
      <Link to='/'>Back to homepage here !</Link>
    </PageContainer>
  );
}

export default Error404;
