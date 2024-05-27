import React from "react";
import ProjectCard from "../Components/ProjectCard";
import Travelix from "../assets/Travelix.png";
import Netflix from "../assets/Netflix.png";
import EstateExplorer from "../assets/Estate Explorers.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function Project() {
  return (
    <>
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
    </>
  );
}

export default Project;
