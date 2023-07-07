import React, { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import RegistrationForm from "./Components/Signup/RegistrationForm";


const api = "http://localhost:4000/registers";

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
      <RegistrationForm posts={post} loadPosts={loadPosts} />
      <Footer />
    </>
  );
}

export default App;
