// src/components/Skills.jsx
import React from "react";

const skills = [
  "Data Analysis",
  "Machine Learning",
  "Deep Learning",
  "API Development (ML as API)",
  "Tools & Technologies (GitHub, etc.)",
  "Soft Skills",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
