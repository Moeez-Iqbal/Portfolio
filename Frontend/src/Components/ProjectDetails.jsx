import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/projects/${id}`);
        setProject(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading project details: {error.message}</p>;

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4">
      <h1 className="text-3xl text-white font-bold justify-center items-center">{project.name}</h1>
      <div className="flex flex-wrap -mx-2 mb-6">
        {project.images.map((image, index) => (
          <div key={index} className="w-full md:w-1/2 px-2 mb-4">
            <img src={image} alt={`Screenshot ${index + 1}`} className="w-full rounded-lg shadow-md" />
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-white">Description:</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside">
          {project.features.map((feature, index) => (
            <li key={index} className="text-gray-700">{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Tools & Technologies:</h2>
        <ul className="list-disc list-inside">
          {project.tools.map((tool, index) => (
            <li key={index} className="text-gray-700">{tool}</li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <a href={project.sourceCode} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Source Code</a>
      </div>
    </div>
  );
};

export default ProjectDetail;
