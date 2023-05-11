import logo from "./logo.svg";
import Profile from "./Components/profilePicture.jsx";
import "./App.css";
import Button from "react-bootstrap/Button";
import TopNavbar from "./Components/Navbar";
import Education from "./Routes/Education";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import Skills from "./Routes/Skills";
// import Experience from "./Routes/Experience";
// import Home from "./Routes/Home";
// import Graduation from "./Routes/Graduation";
import Loading from "./Components/Loading";
// import Ssc from "./Routes/Ssc";
import HighSchool from "./Routes/HighSchool";
import Footer from "./Components/Footer";

const Home = lazy(() => import("./Routes/Home"));
const Skills = lazy(() => import("./Routes/Skills"));
const Experience = lazy(() => import("./Routes/Experience"));
const Graduation = lazy(() => import("./Routes/Graduation"));
const Ssc = lazy(() => import("./Routes/Ssc"));
const Hsc = lazy(() => import("./Routes/HighSchool"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <>
          <TopNavbar></TopNavbar>
        </>

        <Routes>
          <Route path="/skills" Component={Skills} />

          <Route path="/experience" Component={Experience} />

          <Route path="/" Component={Home} />

          <Route path="/home/" Component={Home}>
            <Route path="grad" Component={Graduation} />
            <Route path="ssc" Component={Ssc} />
            <Route path="hsc" Component={Hsc} />
          </Route>
          <Route path="/*" Component={PageNotFound} />
        </Routes>
      </Router>
      <Footer></Footer>
    </Suspense>
  );
}

export default App;
