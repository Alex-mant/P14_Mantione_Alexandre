import React from "react";
import Nav from "../components/Nav/Nav";
import RCTable from "../components/RCTable/RCTable";

const EmployeeList = () => {
  return (
    <div id="employeeList">
      <Nav pathname={"/home"} text={"Create A New Employee"} />
      <RCTable />
    </div>
  );
};

export default EmployeeList;
