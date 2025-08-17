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
  <span></span>,
  <span>&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">get_info</span>(<span className="text-yellow-300">self</span>):</span>,
  <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-pink-400">f"Building the future with code!"</span></span>,
];

const CodeSnippet = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev >= codeLines.length) {
          // Reset animation after a pause
          setTimeout(() => setVisibleLines(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#0d1117] text-white rounded-lg shadow-2xl border border-gray-800 font-mono text-sm w-full max-w-md relative overflow-hidden">
        {/* Window Header */}
        <div className="bg-[#21262d] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>
          <span className="text-gray-400 text-xs font-medium">developer.py</span>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Code Content */}
        <div className="p-4 h-[300px] overflow-hidden">
          <div className="space-y-2 h-full">
            {codeLines.map((line, index) => (
              <div
                key={index}
                className={`flex h-6 transition-all duration-500 ease-out ${
                  index < visibleLines 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
              >
                {/* Line Number */}
                <span className="text-gray-600 text-xs mr-3 select-none w-6 text-right flex-shrink-0 leading-6">
                  {index < visibleLines ? index + 1 : ''}
                </span>
                {/* Code Content */}
                <div className="text-left leading-6 flex-1">
                  {index < visibleLines ? line : ''}
                </div>
              </div>
            ))}
            
            {/* Cursor - only show when actively typing, not after completion */}
            {visibleLines < codeLines.length && (
              <div className="flex h-6">
                <span className="text-gray-600 text-xs mr-3 select-none w-6 text-right flex-shrink-0 leading-6">
                  {visibleLines + 1}
                </span>
                <span className="text-green-400 animate-pulse font-bold leading-6">|</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;