import React, { createConteuseState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ isAuthenticated: false });
const [user, setUser] = useState(false);

const AppWrapper = () => {
  return (
    <Context.Provider
      value={[isAuthenticated, setIsAuthenticated, user, setUser]}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
