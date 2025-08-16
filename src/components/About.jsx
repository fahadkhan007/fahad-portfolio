// src/components/About.jsx
import React from "react";
import { GraduationCap, Heart, Code } from "lucide-react";
import CodeSnippet from "./CodeSnippet"; // ✅ Step 1

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Heading */}
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-12">
        <span className="text-gray-900 dark:text-white">About </span>
        <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side – Description Blocks */}
        <div className="space-y-10">
          {/* My Journey */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">My Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently pursuing B.Tech in Computer Science at Lovely Professional University. I've built a strong base in programming, data structures, and software development principles, which prepares me to solve real-world problems.
              </p>
            </div>
          </div>

          {/* My Passion */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">My Passion</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m passionate about data, intelligent systems, and clean APIs. Whether it's analyzing trends or building backend systems, I thrive on converting complex challenges into impactful solutions through code.
              </p>
            </div>
          </div>

          {/* My Approach */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">My Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in building while learning. Every project is a step toward mastery. I value clean, scalable code, constant learning, and collaborating with others to grow together in this tech journey.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – Code Snippet */}
        <CodeSnippet /> {/* ✅ Step 2 */}
      </div>
    </section>
  );
};

export default About;
