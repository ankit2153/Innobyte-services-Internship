import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVal, setOtpVal] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOTP = (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtpVal(otp);
    setOtpSent(true);

    const params = {
      user_email: email,
      otp: otp,
    };

    emailjs
      .send(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, params, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        (response) => {
          alert("OTP sent successfully");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send OTP");
          console.log("FAILED...", error);
        }
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.otp !== "" && formData.otp == otpVal) {
        alert("Login Successful");
        navigate("/users/" + formData.email);
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="otp"
          placeholder="OTP"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => sendOTP(formData.email)}
          disabled={otpSent}
          style={{
            backgroundColor: otpSent ? "gray" : "green  ",
            height: "30px",
            width: "100px",
            color: "white",
            borderRadius: "5px",
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "90px",
          }}
        >
          Send OTP
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
