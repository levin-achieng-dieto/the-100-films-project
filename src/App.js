import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import "./App.css"
// import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
