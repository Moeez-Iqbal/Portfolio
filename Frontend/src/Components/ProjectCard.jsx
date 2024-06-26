import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, alt, title, id }) => (
  <div className="w-1/3 shadow-lg hover:shadow-orange-500 mx-3 bg-slate-800 z-50 relative group rounded-lg ">
    <div className="relative">
      <img 
        src={image}
        alt={alt}
        className=" rounded-lg transition-transform duration-300 group-hover:scale-105 h-64"
      />
      <div className="absolute inset-4 rounded-lg shadow-md hover:shadow-orange-500 hover:bg-opacity-80 flex flex-col bg-custom-5 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <Link to={`/project/${id}`}>
        <button className="bg-orange-500 text-white text-lg px-4 py-2 rounded-lg mt-5 hover:bg-slate-800">
          See Details
        </button>
        </Link>
      </div>
    </div>
  </div>

);

export default ProjectCard;
