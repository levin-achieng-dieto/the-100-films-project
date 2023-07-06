import React, { useState, useEffect } from "react";
import axios from "axios"

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import Dashboard from "./Components/Dashboard/Dashboard";
import Register from "./Components/Register/Register";
import Signup from "./Components/Signup/Signup";
// import Login from "./Components/Login/Login";

const api = "http://localhost:9292/registered_members";

function App() {


  const [post, setPost] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await axios.get(api);
    setPost(response.data);
  };



  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Courses />
      {/* <Register /> */}
      <Signup posts={post} loadPosts={loadPosts} />
      {/* <Login /> */}
      {/* <Dashboard /> */}
      <Footer />
    </>
  );
}

export default App;
