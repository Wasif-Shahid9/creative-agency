import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./Components/Navbar/Navb";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Router>
        <Navb />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
