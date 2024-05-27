import React, { useState, useEffect } from "react";
import backgroundImage from "../assets/Bg1.jpg";
import {
  FaDownload,
  FaReact,
  FaNode,
  FaLongArrowAltRight,
  FaLocationArrow,
} from "react-icons/fa";
import {
  IoPersonSharp,
  IoCall,
  IoSend,
  IoLocation,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { IoLogoTwitch, IoMdMail } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { VscServerProcess } from "react-icons/vsc";
import Travelix from "../assets/Travelix.png";
import Netflix from "../assets/Netflix.png";
import EstateExplorer from "../assets/Estate Explorers.png";
import ServiceCard from "../Components/ServiceCard";
import ProjectCard from "../Components/ProjectCard";
import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";

function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "MERN Stack Developer",
    "Software Eng Student",
    "React.js",
    "Node.js, Express.js",
    "PostgreSQL, MongoDB",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <>
      <div className="flex m-24">
        <div className="w-1/2">
          <h3 className=" text-gray-400 text-2xl font-semibold">Hello, I'm</h3>
          <h1 className="text-4xl  mt-2 text-white font-bold">Moeez Iqbal</h1>
          <h1 className=" mt-10 text-5xl text-orange-500 font-semibold">
            {texts[textIndex]}
          </h1>
          <h3 className=" mt-10 text-gray-400 font-sans mr-2">
            As a MERN Stack Developer, I am committed to delivering high-quality
            web applications that align perfectly with my clients' needs. With
            years of practical experience in web development, I specialize in
            using technologies such as React.js, Node.js, Express.js,
            PostgreSQL, and MongoDB to create scalable and robust web solutions.
            My emphasis on excellence ensures that every project I engage in not
            only meets but surpasses expectations, achieving outstanding results
            and driving success.
          </h3>
          <div className="flex  mt-14">
            <button className="bg-orange-500 p-2 w-80 text-white rounded-lg hover:bg-gray-700 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center">
              <span className="mr-2">Download Resume</span>
              <FaDownload />
            </button>
            <button className="border-2 border-orange-500 p-2 w-30 text-white rounded-lg hover:bg-orange-500 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center ml-5">
              <span className="mr-2">About</span>
              <FcAbout />
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={backgroundImage}
            alt="Background"
            className=" ml-24 mt-12 max-w-lg  rounded-md transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col items-center m-24">
        <h1 className="text-1xl text-gray-400">What I Provide</h1>
        <div className="flex justify-center gap-4 mt-4">
          <h1 className="text-3xl text-white font-bold">My</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Services</h1>
        </div>

        <div className="flex justify-between mt-16 items-center">
          <ServiceCard
            icon={<FaReact className="text-4xl text-orange-500" />}
            title="Front End Development"
            description="A front-end developer I specializes in creating the visual and interactive aspects of web applications with the use of technologies like HTML, CSS, and JavaScript, along with frameworks such as React to build responsive and user-friendly interfaces."
          />
          <ServiceCard
            icon={<FaNode className="text-4xl text-orange-500" />}
            title="Back End Development"
            description="As a back-end developer I focuses on the server-side logic and database management of web applications by using Nodejs and Expressjs their responsibilities include building APIs, managing database interactions and security for maintaining balance."
          />
          <ServiceCard
            icon={<VscServerProcess className="text-4xl text-orange-500" />}
            title="Full Stack Development"
            description="As a full stack developer, I embrace the challenge of building comprehensive solutions from the ground up. With expertise spanning both front-end and back-end technologies, I thrive on crafting seamless experiences interface elegance."
          />
        </div>
      </div>

      <div className="flex flex-col items-center m-24 mb-5">
        <h1 className="text-1xl text-gray-400">Some of my recent Projeects</h1>
        <div className="flex justify-center gap-4 mt-4">
          <h1 className="text-3xl text-white font-bold">Featured</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Projects</h1>
        </div>

        <div className="flex justify-between  items-center mt-16">
          <ProjectCard
            image={Travelix}
            alt="Travelix Project"
            title="Travel Agency Front End"
          />
          <ProjectCard
            image={Netflix}
            alt="Netflix Project"
            title="Netflix UI Front End"
          />
          <ProjectCard
            image={EstateExplorer}
            alt="Estate Explorer Project"
            title="Real Estate Full Stack"
          />
        </div>
      </div>
      <div className="ml-24">
        <button className="text-md flex mx-3 mt-4  items-center text-white bg-orange-500 p-2 rounded-lg font-semibold hover:bg-slate-700 transform transition-transform duration-300 hover:-translate-y-2">
          See All <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>

      <div className="flex flex-col items-center m-6 md:m-24 mb-5">
        <h1 className="text-1xl text-gray-400">Feel Free to Contact Me</h1>
        <div className="flex justify-center gap-4 mt-4">
          <h1 className="text-3xl text-white font-bold">Get In</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Touch</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-40">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4 ml-8 md:ml-36">
          <h1 className="text-3xl text-white font-semibold">Contact Me</h1>
          <ContactForm />
          <div className="flex gap-2">
          <button className="bg-orange-500 p-2 w-30 text-white rounded-lg hover:bg-slate-800 transform transition-transform duration-300 hover:-translate-y-2 font-semibold flex items-center justify-center mt-4">
            <span >Send</span>
            <IoSend className="ml-2"/>
          </button>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-4 ml-8 md:ml-36 ">
          <h1 className="text-3xl text-white font-semibold mb-4">
            Contact Info
          </h1>
          <div className="flex flex-col mt-4">
            <ContactInfo
              icon={
                <IoPersonSharp className="text-3xl text-white hover:text-orange-500" />
              }
              details="Moeez Iqbal"
            />
            <ContactInfo
              icon={
                <IoCall className="text-3xl text-white hover:text-orange-500" />
              }
              details="03044096036"
            />
            <ContactInfo
              icon={
                <IoMdMail className="text-3xl text-white hover:text-orange-500" />
              }
              details="moeeziqbalmughal@gmail.com"
            />
            <ContactInfo
              icon={
                <IoLocation className="text-3xl text-white hover:text-orange-500" />
              }
              details="Lahore, Pakistan"
            />
          </div>
          <div className="mt-8">
            <div className="flex gap-4">
              <h1 className="text-gray-400 text-2xl font-semibold">
                Social ________
              </h1>
              <a
                href="https://www.linkedin.com/in/Moeez-Iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://github.com/Moeez-Iqbal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://twitter.com/MoeezIqbal16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTwitter className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://www.facebook.com/moeez.iqbal.50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
              <a
                href="https://wa.me/+923044096036"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="text-gray-400 text-3xl hover:text-orange-500 transform transition-transform duration-300 hover:-translate-y-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
