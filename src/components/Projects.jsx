// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Olympics Data Dashboard",
    description:
      "An interactive Excel dashboard visualizing Olympic statistics. Created using pivot charts and slicers.",
  },
  {
    title: "Stock Price Prediction App",
    description:
      "ML-powered web app predicting future stock prices using Flask API and Streamlit frontend.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
