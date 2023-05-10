// import logo from "./logo.svg";
import Profile from "../Components/profilePicture.jsx";
import "../App.css";
// import Button from "react-bootstrap/Button";
// import TopNavbar from "./Components/Navbar";
import Education from "../Components/Education";

function Home() {
  return (
    <>
      <div className="main-container">
        <Profile></Profile>
        {/* <div class="break"></div> */}
        {/* Himanshu */}

        <div className="profile-text">
          Himanshu Sharma <br />
          <span className="skills-set">Aspiring FullStack Developer</span>
        </div>
      </div>

      <Education></Education>
    </>
  );
}

export default Home;
