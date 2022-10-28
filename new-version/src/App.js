import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import HRnetLogo from "./components/HRnetLogo/HRnetLogo";
import { store } from "./redux/app/store";
import React, { Suspense } from "react";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from 'redux-persist/integration/react';

const Home = React.lazy(() => import("./pages/Home"));
const EmployeeList = React.lazy(() => import("./pages/EmployeeList"));
const Error404 = React.lazy(() => import("./pages/Error404"));

let persistor = persistStore(store)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HRnetLogo />
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<Error404/>} />
              </Routes>
            </Suspense>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
