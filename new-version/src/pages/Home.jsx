import React from "react";
import  {CustomModal} from "@alexandre_m/custom-modal";
import FormToCreateEmployee from "../components/FormToCreateEmployee/FormToCreateEmployee";
import { useSelector } from "react-redux";
import check from '../assets/check.svg'
import failure from '../assets/failure.svg'
import Nav from '../components/Nav/Nav';
import user from '../assets/viewEmployee.svg'

const Home = () => {
  const formTitle = "Create Employee";
  const isSuccess = useSelector(state => state.formulary.isSuccess);

  return (
    <div id="home">
      <Nav pathname={"/employee-list"} img={user} text="View Employees"/>
      <FormToCreateEmployee title={formTitle} />
      <CustomModal id="Modal" success={isSuccess} icon={isSuccess ? check : failure}/>
    </div>
  );
};

export default Home;
