import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./PortfolioContainer/Home/Profile";

const App = () => {
  return (
    <div >
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
