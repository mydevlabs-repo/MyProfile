import Nav from "react-bootstrap/Nav";
import Logo from "../Assets/Logo/MyLabs.png";
function TopNavbar() {
  return (
    <Nav
      className="top-nav"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="web-title me-auto">
        <Nav.Item>
          <Nav.Link href="/home">
            <img src={Logo} className="logo"></img>
          </Nav.Link>
        </Nav.Item>
      </div>
      <div className="web-items">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled">Experience</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default TopNavbar;
