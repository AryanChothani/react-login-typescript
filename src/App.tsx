import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Login";
import Otp from "./components/Auth/Otp";
import Profile from "./components/user/profile";

import { store } from './redux/store'
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Provider >
    </div>
  );
}

export default App;
