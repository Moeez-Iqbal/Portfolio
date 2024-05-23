import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

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

  return (
    <header
      className={`bg-custom-5 w-full z-50 shadow-xl p-4 transition-transform duration-300 transform ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to={"/"}>
          <h1 className="font-lobster text-orange-500 text-3xl">Moeez Iqbal</h1>
        </NavLink>

        <ul className="flex items-center gap-6 text-white text-1xl ">
          <NavLink to={"/"} className="hover:text-orange-500 font-semibold">
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="hover:text-orange-500 font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to={"/project"}
            className="hover:text-orange-500 font-semibold"
          >
            Project
          </NavLink>
          <NavLink
            to={"/contact"}
            className="hover:text-orange-500 font-semibold"
          >
            Contact
          </NavLink>
          <li className="bg-orange-500 rounded-md p-2 font-semibold flex items-center hover:bg-slate-700 hover:transform hover:scale-105 transition-transform duration-300">
            <span className="mr-2">Resume</span>
            <FaDownload />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
