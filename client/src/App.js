import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Skeleton from "./components/Skeleton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <Router>
        <Skeleton />
      </Router>
    </div>
  );
}

export default App;
