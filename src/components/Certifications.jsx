// src/components/Certifications.jsx
import React from "react";

const certifications = [
  "Python for Everybody - Coursera",
  "Machine Learning - Stanford",
  "Deep Learning Specialization",
  "Data Analytics with Excel",
  "AI & ChatGPT - NPTEL",
  "Cloud Computing - IIT KGP",
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="min-h-screen py-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm text-gray-800 dark:text-gray-100"
            >
              {cert}
            </div>
          ))}
        </div>

        {/* LeetCode Card */}
        <div className="p-6 rounded-xl bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 shadow-md inline-block">
          Practicing DSA on <strong>LeetCode</strong> daily 💻
        </div>
      </div>
    </section>
  );
};

export default Certifications;
