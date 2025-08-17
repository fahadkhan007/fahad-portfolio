// src/components/Certifications.jsx
import React, { useState, useEffect } from "react";
import { 
  Award, 
  Cloud, 
  Brain, 
  Monitor, 
  Code, 
  Cpu, 
  Coffee,
  ExternalLink,
  Calendar,
  GraduationCap
} from "lucide-react";

const certificationsData = [
  {
    title: "Cloud Computing",
    provider: "IIT Kharagpur",
    platform: "NPTEL",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    category: "Cloud Technology",
    year: "2024"
  },
  {
    title: "AI Powered NLP",
    provider: "Algo Tutor Academy",
    platform: "Bangalore",
    icon: <Brain className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-200 dark:border-indigo-800/50",
    category: "Artificial Intelligence",
    year: "2024"
  },
  {
    title: "Hardware & Operating System",
    provider: "IBM",
    platform: "Coursera",
    icon: <Monitor className="w-6 h-6" />,
    color: "from-slate-600 to-gray-700",
    bgColor: "bg-slate-50 dark:bg-slate-950/30",
    borderColor: "border-slate-200 dark:border-slate-800/50",
    category: "System Design",
    year: "2024"
  },
  {
    title: "DSA Certification",
    provider: "IAMneo Platform",
    platform: "College Partners",
    icon: <Code className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    borderColor: "border-cyan-200 dark:border-cyan-800/50",
    category: "Data Structures",
    year: "2024"
  },
  {
    title: "Digital Systems",
    provider: "Universitat Autònoma de Barcelona",
    platform: "Coursera",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    category: "Digital Design",
    year: "2024"
  },
  {
    title: "Java Certification",
    provider: "IAMneo Platform",
    platform: "College Partners",
    icon: <Coffee className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    category: "Programming",
    year: "2024"
  }
];

const CertificationCard = ({ cert, index, isVisible }) => {
  return (
    <div 
      className={`group relative ${cert.bgColor} ${cert.borderColor} border rounded-xl p-5 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] hover:-translate-y-1 transform backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      {/* Header with Icon and Year */}
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
          {cert.icon}
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
          {cert.year}
        </span>
      </div>

      {/* Certification Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {cert.title}
      </h3>

      {/* Provider Info */}
      <div className="space-y-1 mb-3">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          {cert.provider}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          via {cert.platform}
        </p>
      </div>

      {/* Category and Verification */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700">
          {cert.category}
        </span>
        
        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <Award className="w-3 h-3" />
          <span className="text-xs font-medium">Verified</span>
        </div>
      </div>

      {/* Subtle hover glow */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-r ${cert.color} transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
};

const Certifications = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.cert-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="certifications"
      className="min-h-screen py-20 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-32 right-10 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-32 left-10 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Continuous learning through industry-recognized certifications from top institutions and platforms
          </p>
          
          {/* Simple decorative line */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="cert-card"
              data-index={index}
            >
              <CertificationCard 
                cert={cert} 
                index={index} 
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-8">
          {/* LeetCode Profile Link */}
          <a 
            href="https://leetcode.com/fahadkhan07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium group"
          >
            <Code className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
            <span>Daily DSA Practice on LeetCode</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Click to view my LeetCode profile and progress 🚀
          </p>

          {/* Stats Row - simplified */}
          <div className="flex justify-center space-x-8 text-center">
            <div className="group">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Institutions</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300">
                2024
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Latest Year</div>
            </div>
          </div>

          {/* Call to Action */}
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg mx-auto">
            Always eager to learn new technologies and expand my skill set. Currently exploring advanced AI/ML concepts and cloud architectures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;