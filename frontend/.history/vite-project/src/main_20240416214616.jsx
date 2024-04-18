import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const[user, setUser] 
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
