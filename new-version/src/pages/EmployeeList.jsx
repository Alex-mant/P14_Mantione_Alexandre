import React from "react";
import Nav from "../components/Nav/Nav";
import TablePlugin from "../components/TablePlugin/TablePlugin";
import back from "../assets/return.svg";

const EmployeeList = () => {
  return (
    <div id="employeeList">
      <Nav pathname={"/"} img={back} text={"home"}/>
      <TablePlugin />
    </div>
  );
};

export default EmployeeList;
