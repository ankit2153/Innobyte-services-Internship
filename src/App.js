// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hello from "./components/Hello";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

import SignupForm from "./components/Signup";

import LoginPass from "./components/LoginPass";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hello />} />

          <Route path="/login-otp" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login-pass" element={<LoginPass />} />
          <Route path="/users/:email" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
