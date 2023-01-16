import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Category,
  Footer,
  Home,
  Login,
  Requested,
  Robot,
  Trolleys,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/trolleys" element={<Trolleys />} />
        <Route path="/requestedTrolley" element={<Requested />} />
        <Route path="/robot" element={<Robot />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
