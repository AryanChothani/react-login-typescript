import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Login";
import Otp from "./components/Auth/Otp";
import Profile from "./components/User/profile"
import ProtectedRoute from "./components/RestrictedRoute";
import { useAuthContext } from "./context/authContext";

function App() {
  const [authContext, updateAuthContext] = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/profile" element={<ProtectedRoute isAuthenticated={authContext.isAuthenticated} outlet={<Profile />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
