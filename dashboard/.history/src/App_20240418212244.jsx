import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import AddNewDoctor from "./"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
