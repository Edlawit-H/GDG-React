// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const navigateToProfile = () => {
    navigate("/user-profile"); // Navigate to the user profile page
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={navigateToProfile}>Go to User Profile</button>
    </div>
  );
}

export default Home;
