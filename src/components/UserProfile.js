// UserProfile.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style/user.css";

const UserProfile = () => {
  const { email } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${email}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserData();
  }, [email]);

  return (
    <div className="user-profile-container">
      {userData ? (
        <div>
          <h1>User Profile</h1>
          <p>
            <b>Name:</b> {userData.username}
          </p>
          <p>
            <b>Email:</b> {userData.email}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
