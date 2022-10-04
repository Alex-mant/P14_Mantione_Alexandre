import React from "react";
import { CustomModal } from "@alexandre_m/custom-modal";
import FormToCreateEmployee from "../components/FormToCreateEmployee/FormToCreateEmployee";
import Nav from '../components/Nav/Nav';

const Home = () => {
  const formTitle = "Create Employee";

  return (
    <div id="home">
      <Nav pathname={"/employee-list"} text={"View Current Employees"}/>
      <FormToCreateEmployee title={formTitle} />
      <CustomModal id="Modal" />
    </div>
  );
};

export default Home;
