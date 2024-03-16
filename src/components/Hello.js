// Home.js

import React from "react";
import { Link } from "react-router-dom";

import "./style/hello.css";

const Home = () => {
  console.log(process.env);
  return (
    <div className="home">
      <h1>User Management API</h1>
      <div className="blocks">
        <Link to="/login-otp" className="block">
          <h2>Login with OTP</h2>
        </Link>
        <Link to="/login-pass" className="block">
          <h2>Login with Password</h2>
        </Link>
        <Link to="/signup" className="block">
          <h2>Signup</h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;
