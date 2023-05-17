import logo from "./logo.svg";
import Profile from "./Components/profilePicture.jsx";
import "./App.css";
import Button from "react-bootstrap/Button";
import TopNavbar from "./Components/Navbar";
import Education from "./Routes/Education";
import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Switch,
  Redirect,
  NavLink,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import Skills from "./Routes/Skills";
// import Experience from "./Routes/Experience";
// import Home from "./Routes/Home";
// import Graduation from "./Routes/Graduation";
// import Loading from "./Components/Loading";
// import Ssc from "./Routes/Ssc";
// import HighSchool from "./Routes/HighSchool";
import Footer from "./Components/Footer";

const Home = lazy(() => import("./Routes/Home"));
const Skills = lazy(() => import("./Routes/Skills"));
const Experience = lazy(() => import("./Routes/Experience"));
const Graduation = lazy(() => import("./Routes/Graduation"));
const Ssc = lazy(() => import("./Routes/Ssc"));
const Hsc = lazy(() => import("./Routes/HighSchool"));
const PageNotFound = lazy(() => import("./Components/PageNotFound"));
const Loading = lazy(() => import("./Components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <>
          <TopNavbar></TopNavbar>
        </>

        <Routes>
          <Route path="/skills" element={<Skills />} />

          <Route path="/experience" element={<Experience />} />

          <Route path="/" element={<Navigate to="/home/grad" />} />

          <Route path="/home" element={<Home />} replace>
            <Route index path="grad" element={<Graduation />} />
            <Route path="ssc" element={<Ssc />} />
            <Route path="hsc" element={<Hsc />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </Suspense>
  );
}

export default App;
