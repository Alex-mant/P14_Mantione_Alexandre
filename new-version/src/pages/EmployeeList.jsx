import React from "react";
import Nav from "../components/Nav/Nav";
import Table from "../components/Table/Table";
import back from "../assets/return.svg";

const EmployeeList = () => {
  return (
    <div id="employeeList">
      <Nav pathname={"/home"} img={back} text={"home"}/>
      <Table />
    </div>
  );
};

export default EmployeeList;
