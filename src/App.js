import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Profile from "./PortfolioContainer/Home/Profile";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Profile/>
    </div>
  );
};

export default App;
