import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer";
import ProjectDetail from "../Components/ProjectDetails";

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Moeez Iqbal | Portfolio  ";
        break;
      case "/about":
        document.title = "About | Moeez Iqbal";
        break;
      case "/project":
        document.title = "Projects | Moeez Iqbal";
        break;
      case "/contact":
        document.title = "Contact | Moeez Iqbal";
        break;
      default:
        document.title = "Moeez Iqbal Portfolio";
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
