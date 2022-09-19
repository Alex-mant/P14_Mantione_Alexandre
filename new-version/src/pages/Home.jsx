import React from 'react';
import { Link } from 'react-router-dom';
import FormToCreateEmployee from '../components/FormToCreateEmployee/FormToCreateEmployee';
import ModalConfirmation from '../components/ModalConfirmation/ModalConfirmation';

const Home = () => {
  const formTitle = 'Create Employee';
  const css = {id:"Modal"}
  const text = "OKOK";

  return (
    <div id='home'>
      <Link className='home_navLink' to={{pathname:'/employee-list'}}>View Current Employees</Link>
      <FormToCreateEmployee title={formTitle}/>
      <ModalConfirmation css={css} text={text}/>
    </div>
  );
}

export default Home;
