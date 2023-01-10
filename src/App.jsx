import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Category,
  Footer,
  Home,
  Login,
  Map,
  Prepare,
  Prepared,
  Request,
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
        <Route path="/category" element={<Category />}>
          <Route
            path="/category"
            element={
              <Navigate replace to="/category/prepare" element={<Category />} />
            }
          />
          <Route path="/category/prepare" element={<Prepare />} />
          <Route path="/category/request" element={<Request />} />
        </Route>
        <Route path="/trolleys" element={<Trolleys />}>
          <Route
            path="/trolleys"
            element={
              <Navigate
                replace
                to="/trolleys/prepared"
                element={<Trolleys />}
              />
            }
          />
          <Route path="/trolleys/prepared" element={<Prepared />} />
          <Route path="/trolleys/requested" element={<Requested />} />
        </Route>
        <Route path="/map" element={<Map />} />
        <Route path="/robot" element={<Robot />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
