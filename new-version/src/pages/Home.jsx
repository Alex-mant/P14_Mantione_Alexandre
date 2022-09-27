import React from 'react';
import { Link } from 'react-router-dom';
import { CustomModal } from '@alexandre_m/custom-modal'
import FormToCreateEmployee from '../components/FormToCreateEmployee/FormToCreateEmployee';

const Home = () => {
  const formTitle = 'Create Employee';

  return (
    <div id='home'>
      <Link className='home_navLink' to={{pathname:'/employee-list'}}>View Current Employees</Link>
      <FormToCreateEmployee title={formTitle}/>
      <CustomModal id='Modal'/>
    </div>
  );
}

export default Home;
