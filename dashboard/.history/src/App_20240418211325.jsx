import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<></>}/>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
