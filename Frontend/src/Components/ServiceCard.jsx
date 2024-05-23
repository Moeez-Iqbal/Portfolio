import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="w-1/3 p-2 mx-2 z-50 shadow-md flex flex-col justify-center items-center hover:shadow-orange-500 hover:bg-opacity-5 border-2 border-transparent transition duration-300 bg-slate-800 rounded-lg transform hover:scale-105 cursor-pointer">
    {icon}
    <h1 className="text-white font-semibold text-2xl mt-4">{title}</h1>
    <p className="text-white text-1xl mt-4 p-3 text-center">{description}</p>
  </div>
);

export default ServiceCard;
