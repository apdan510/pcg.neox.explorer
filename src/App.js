
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import How from "./components/How";
import Login from "./components/Login";
import CurrentInventory from "./pages/CurrentInventory";
import PastInventory from "./pages/PastInventory";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Cards />
              <How />
              <Contact />
            </>
          } />
          <Route path="/current-inventory" element={<CurrentInventory />} />
          <Route path="/past-inventory" element={<PastInventory />} />
        </Routes>
        <button className="floating-login-button" onClick={() => Login()}>
          Login
        </button>
      </div>
    </Router>
  );
}

export default App;
