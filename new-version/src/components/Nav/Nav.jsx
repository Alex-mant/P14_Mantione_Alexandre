import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({pathname, text}) => {
  return (
    <>
      <Link className='home_navLink' to={{pathname: pathname}}>{text}</Link>
    </>
  );
}

export default Nav;
