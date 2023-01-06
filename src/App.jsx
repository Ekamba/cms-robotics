import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Login } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
