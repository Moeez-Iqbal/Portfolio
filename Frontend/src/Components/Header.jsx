import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import DownloadResumeButton from "./DownloadResumeButton";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 50;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`bg-custom-5 w-full z-50 shadow-xl p-4 transition-transform duration-1000 transform ${visible ? "" : "-translate-y-full"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/">
          <h1 className="font-lobster text-orange-500 text-3xl">Moeez Iqbal</h1>
        </NavLink>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-custom-5 flex flex-col items-center justify-center gap-6 text-white text-2xl lg:text-base lg:flex lg:flex-row lg:static lg:w-auto lg:h-auto lg:bg-transparent transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 font-semibold"} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 font-semibold"} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 font-semibold"} onClick={() => setMenuOpen(false)}>
            Project
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500 font-semibold"} onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <DownloadResumeButton className="w-96"/>
        </ul>
      </div>
    </header>
  );
}

export default Header;
