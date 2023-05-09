import logo from "./logo.svg";
import Profile from "./Components/profilePicture.jsx";
import "./App.css";
import Button from "react-bootstrap/Button";
import TopNavbar from "./Components/Navbar";

function App() {
  return (
    <>
      <TopNavbar></TopNavbar>
      <div className="main-container">
        <Profile></Profile>
        {/* <div class="break"></div> */}
        {/* Himanshu */}

        <div className="profile-text">
          Himanshu Sharma <br />
          <span className="skills-set">FullStack Developer</span>
        </div>
      </div>
    </>
  );
}

export default App;
