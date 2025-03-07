// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Routes instead of Switch
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";  // Import NotFound component

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/user-profile">User Profile</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>  {/* Change Switch to Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* Use NotFound for any other undefined route */}
          <Route path="*" element={<NotFound />} />  {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
