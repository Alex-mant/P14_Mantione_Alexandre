import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HRnetLogo from "./components/HRnetLogo/HRnetLogo";
import { store } from "./redux/app/store";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"))
const EmployeeList = React.lazy(() => import("./pages/EmployeeList"))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HRnetLogo />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path="/employee-list" element={<EmployeeList />} />
            </Routes>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
