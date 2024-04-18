import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbaor

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
