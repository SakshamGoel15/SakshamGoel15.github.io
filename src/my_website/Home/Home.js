import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
    </div>
  );
}
