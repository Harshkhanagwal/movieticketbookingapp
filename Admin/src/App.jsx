import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import Dashboard from "./Dashboard";

function App() {
  const [token, setToken] = useState(true); // false means user not logged in

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/*"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>

    //for dev branch
  );
}

export default App;
