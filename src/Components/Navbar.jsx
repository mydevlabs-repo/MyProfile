import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Logo from "../Assets/Logo/MyLabs.png";
import Skills from "./Skills";
import Experience from "./Experience";
import App from "../App";
import Home from "./Home";
function TopNavbar() {
  return (
    <Router>
      <Nav
        className="top-nav"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="web-title me-auto">
          <Nav.Item>
            <NavLink to="/home">
              <img src={Logo} className="logo"></img>
            </NavLink>
          </Nav.Item>
        </div>
        <div className="web-items">
          <Nav.Item>
            <NavLink to="/home" className="text-decoration-none">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/skills" className="text-decoration-none">
              Skills
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/experience" className="text-decoration-none">
              Experience
            </NavLink>
          </Nav.Item>
        </div>
      </Nav>

      <Routes>
        <Route path="/skills" element={<Skills />} />

        <Route path="/experience" element={<Experience />} />

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default TopNavbar;
