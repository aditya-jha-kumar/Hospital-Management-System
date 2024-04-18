import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



const AppWrapper = () => {
  export const Context = createContext({ isAuthenticated: false });
  const [user, setUser] = useState(false);
  
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
