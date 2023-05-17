import Nav from "react-bootstrap/Nav";
import Logo from "../Assets/Logo/MyLabs.png";
import Skills from "../Routes/Skills";
import Experience from "../Routes/Experience";
import App from "../App";
import Home from "../Routes/Home";
import Graduation from "../Routes/Graduation";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function TopNavbar() {
  return (
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
  );
}

export default TopNavbar;
