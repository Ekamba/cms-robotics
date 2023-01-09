import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Category,
  Footer,
  Home,
  Login,
  Prepare,
  Prepared,
  Request,
  Requested,
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
        <Route path="/trolleys" element={<Trolleys />}>
          <Route path="/trolleys/prepared" element={<Prepared />} />
          <Route path="/trolleys/requested" element={<Requested />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
