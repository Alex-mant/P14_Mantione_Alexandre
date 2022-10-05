import React from "react";
import Nav from "../components/Nav/Nav";
import RCTable from "../components/RCTable/RCTable";
import back from "../assets/return.svg";

const EmployeeList = () => {
  return (
    <div id="employeeList">
      <Nav pathname={"/home"} img={back} text={"home"}/>
      <RCTable />
    </div>
  );
};

export default EmployeeList;
