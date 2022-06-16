import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";

import keafarmLogo from "./images/keafarm.png";
import { ConnectButton, Button } from "web3uikit";

const App = () => {
  return (
    <>
      <div className="header">
        <img width="60px" src={keafarmLogo} alt="logo" />
        <div class="your-class">
          <ConnectButton />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;
