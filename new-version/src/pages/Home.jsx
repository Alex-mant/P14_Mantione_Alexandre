import React from 'react';
import { Link } from 'react-router-dom';
import FormToCreateEmployee from '../components/FormToCreateEmployee/FormToCreateEmployee';

const Home = () => {
  const formTitle = 'Create Employee';

  const handleClick = () => {
    const x = document.querySelector(".Form");
    const formData = new FormData(x);
    console.log(...formData.entries());
  }

  return (
    <div id='home'>
      <h1 className='home_mainTitle'>HRnet</h1>
      <Link className='home_navLink' to={{pathname:'/employee-list'}}>View Current Employees</Link>
      <FormToCreateEmployee title={formTitle}/>
      <button onClick={() => {handleClick()}} className='home_submit-btn'>Save</button>
    </div>
  );
}

export default Home;
