import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HRnetLogo from "./components/HRnetLogo/HRnetLogo";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import { store } from "./redux/app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HRnetLogo/>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/employee-list" element={<EmployeeList/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
