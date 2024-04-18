import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const Context = createContext([isAuthenticated: false]);
const [user, setUser] = useState(false);

return(
  <Context.Provider  value={[isAuthenticated, setIsAutheuser, setUser]}>
    <App/>
  </Context.Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
