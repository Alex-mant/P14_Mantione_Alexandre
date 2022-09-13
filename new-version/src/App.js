import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route path="/employee-list" element={<EmployeeList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
