import React, { useState, useEffect } from "react";
import Moeez from "../assets/Moeez.jpg";
import { FaDownload } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoReact,
} from "react-icons/io5";
import {
  SiExpress,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import { RiBootstrapFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import LottiePlayer from "../Components/LottiePlayer";
import DownloadResumeButton from "../Components/DownloadResumeButton";

function About() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "MERN Stack Developer",
    "Software Engineering Student",
    "React.js",
    "Node.js, Express.js",
    "PostgreSQL, MongoDB",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [textIndex, texts.length]);

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-1xl text-gray-400">Something about myself</h1>
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="text-3xl text-white font-bold">About</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Me</h1>
        </div>
      </div>

      <div className="flex flex-row ml-32 mt-20 mr-20">
        <div className="w-1/2 p-10">
          <img src={Moeez} alt="Moeez Iqbal" className="rounded-2xl w-96 hover:transform hover:scale-105 transition-transform duration-300" />
        </div>

        <div className="w-1/2 ">
          <h3 className="text-gray-400 text-2xl font-semibold">Hello, I'm</h3>
          <h1 className="text-4xl mt-2 text-white font-bold">Moeez Iqbal</h1>
          <h1 className="mt-10 text-3xl text-orange-500 font-semibold">
            {texts[textIndex]}
          </h1>
          <p className="mt-10 text-gray-400 font-sans">
            As a MERN Stack Developer, I am committed to delivering high-quality
            web applications that align perfectly with my clients' needs. With
            years of practical experience in web development, I specialize in
            using technologies such as React.js, Node.js, Express.js,
            PostgreSQL, and MongoDB to create scalable and robust web solutions.
            My emphasis on excellence ensures that every project I engage in not
            only meets but surpasses expectations, achieving outstanding results
            and driving success.
          </p>

          <div className="flex flex-row gap-3 mt-5">
            <h1 className="text-orange-500 text-1xl font-semibold">Name :</h1>
            <p className="text-white text-1xl font-semibold">Moeez Iqbal</p>

            <h1 className="text-orange-500 text-1xl font-semibold">Email :</h1>
            <p className="text-white text-1xl font-semibold">
              moeeziqbalmughal@gmail.com
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-5">
            <h1 className="text-orange-500 text-1xl font-semibold">Phone :</h1>
            <p className="text-white text-1xl font-semibold">03044096036</p>
            <h1 className="text-orange-500 text-1xl font-semibold">
              Address :
            </h1>
            <p className="text-white text-1xl font-semibold">
              Lahore, Pakistan
            </p>
          </div>
          <div className="flex  mt-14">
          <DownloadResumeButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24">
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="text-3xl text-white font-bold">My</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Skills</h1>
        </div>
      </div>

      <div className="flex">
        <div className="w=1/2 m-10 ml-52">
          <h1 className="text-emerald-300 text-2xl font-semibold">
            Languages:
          </h1>
          <div className="flex flex-row mt-5 gap-3">
            <IoLogoHtml5 className="text-orange-600  bg-custom-4 bg-opacity-5 p-1 rounded-md text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoCss3 className="text-blue-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoJavascript className="text-yellow-400 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 text-2xl font-semibold mt-5">
            Libraries and Frameworks:
          </h1>
          <div className="flex flex-row mt-5 gap-3">
            <IoLogoReact className="text-blue-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoNodejs className="text-green-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <SiExpress className="text-gray-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <RiTailwindCssFill className="text-emerald-400 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <RiBootstrapFill className="text-purple-600 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 text-2xl font-semibold mt-5">
            Tools and Technologies:
          </h1>
          <div className="flex flex-row mt-5 gap-3">
            <SiVisualstudiocode className="text-blue-400  bg-custom-4 bg-opacity-5 p-1 rounded-md text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <SiGit className="text-gray-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <IoLogoGithub className="text-black-400 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
            <SiPostman className="text-orange-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
          <h1 className="text-emerald-300 text-2xl font-semibold mt-5">
            Databases:
          </h1>
          <div className="flex flex-row mt-5 gap-3">
            <SiMongodb className="text-green-500  bg-custom-4 bg-opacity-5 p-1 rounded-md text-5xl transform transition-transform duration-300 hover:-translate-y-2" />
            <SiPostgresql className="text-blue-500 text-5xl  bg-custom-4 bg-opacity-5 p-1 rounded-md transform transition-transform duration-300 hover:-translate-y-2" />
          </div>
        </div>

        <div className="w-1/2 ml-48 mt-5">
        <LottiePlayer 
        src="https://lottie.host/6acb3d7f-047e-45a8-a621-7bc491c8688a/Odm0Zqw3tz.json" 
        width="500px" 
        height="500px" 
      />
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center gap-2 mt-2">
          <h1 className="text-3xl text-white font-bold">My</h1>
          <h1 className="text-3xl text-orange-500 font-bold">Qualifications</h1>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 ml-48 mt-10">
        <LottiePlayer 
        src="https://lottie.host/4fcec937-9651-4aee-9837-285ed03071bd/QuZehPzqVq.json" 
        width="400px" 
        height="400px" 
      />
        </div>

        <div className="w-1/2 mt-16 mb-16 ">
          <div className="bg-custom-4 bg-opacity-5 w-2/4 rounded-md p-2 z-50 shadow-md hover:shadow-orange-600 hover:transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-orange-500 text-2xl">
              Software Engineering Student
            </h1>
            <p className="text-white">
            As a diligent software engineering student, I'm honing my skills in various technologies, including the MERN stack. With a passion for learning and a drive for excellence, I'm committed to becoming a proficient developer capable of delivering innovative solutions and contributing to the field of software engineering.
            </p>
          </div>
          <div className="bg-custom-4 bg-opacity-5 w-2/4 rounded-md p-2 ml-40 mt-2 z-50 shadow-md hover:shadow-orange-600 hover:transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-orange-500 text-2xl">MERN Stack Developer</h1>
            <p className="text-white">
            I'm a seasoned MERN stack developer specializing in React.js, Node.js, Express.js, MongoDB and PostgreSQL. With a focus on creating scalable and robust web solutions, I leverage my expertise to deliver high-quality applications that meet clients' needs and surpass expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
