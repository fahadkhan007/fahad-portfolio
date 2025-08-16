// src/components/CodeSnippet.jsx
import React, { useEffect, useState } from "react";

const codeLines = [
  <span><span className="text-purple-400">class</span> <span className="text-green-400">Developer</span>:</span>,
  <span>&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-yellow-300">self</span>):</span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.name = <span className="text-pink-400">"Fahad Khan"</span></span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.role = <span className="text-pink-400">"Data Scientist"</span></span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.location = <span className="text-pink-400">"Jalandhar, India"</span></span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.education = <span className="text-pink-400">"B.Tech CSE @ LPU"</span></span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.skills = [<span className="text-pink-400">"Data Analysis"</span>, <span className="text-pink-400">"ML"</span>, <span className="text-pink-400">"API Dev"</span>]</span>,
];

const CodeSnippet = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center md:justify-end">
      <div className="bg-[#0f172a] text-white rounded-xl shadow-xl p-4 font-mono text-sm transition-transform duration-300 transform hover:scale-[1.02] relative max-w-lg w-full">
        {/* MacOS-style buttons */}
        <div className="absolute top-3 left-4 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Filename */}
        <div className="text-gray-400 text-xs mb-3 mt-1 pl-1">developer.py</div>

        {/* Code Lines with Line Numbers */}
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`flex transition-all duration-300 ease-out ${
                index < visibleLines 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              }`}
            >
              {/* Line Number */}
              <span className="text-gray-500 text-xs mr-4 select-none w-6 text-right flex-shrink-0">
                {index < visibleLines ? index + 1 : ''}
              </span>
              {/* Code Content */}
              <div className="text-left whitespace-nowrap">
                {index < visibleLines ? line : ''}
              </div>
            </div>
          ))}
          
          {/* Cursor */}
          {visibleLines <= codeLines.length && (
            <div className="flex">
              <span className="text-gray-500 text-xs mr-4 select-none w-6 text-right flex-shrink-0">
                {visibleLines < codeLines.length ? visibleLines + 1 : ''}
              </span>
              <span className="text-white animate-pulse">|</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;