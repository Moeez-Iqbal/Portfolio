import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer";

function AppRoutes() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default AppRoutes;
