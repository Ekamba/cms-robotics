import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Category,
  Home,
  Login,
  Prepare,
  Request,
  Trolleys,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />}>
          <Route path="/category/prepare" element={<Prepare />} />
          <Route path="/category/request" element={<Request />} />
        </Route>
        <Route path="/trolleys" element={<Trolleys />} />
      </Routes>
    </div>
  );
}

export default App;
