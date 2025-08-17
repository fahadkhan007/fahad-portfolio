// src/components/Skills.jsx
import React, { useState, useEffect } from "react";
import { 
  Database, 
  Brain, 
  Code, 
  Server, 
  GitBranch, 
  Users,
  TrendingUp,
  Zap,
  Monitor,
  Globe
} from "lucide-react";

const skillsData = [
  {
    category: "Data Analysis",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    proficiency: 85,
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "SQL"],
    description: "Extracting insights from data to drive decision-making"
  },
  {
    category: "Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-200 dark:border-indigo-800/50",
    proficiency: 80,
    tools: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV", "NLTK"],
    description: "Building intelligent systems that learn from data"
  },
  {
    category: "Deep Learning",
    icon: <Zap className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800/50",
    proficiency: 75,
    tools: ["Neural Networks", "CNNs", "RNNs", "GANs", "Transformers", "BERT"],
    description: "Advanced AI models for complex pattern recognition"
  },
  {
    category: "API Development",
    icon: <Server className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-slate-50 dark:bg-slate-950/30",
    borderColor: "border-slate-200 dark:border-slate-800/50",
    proficiency: 78,
    tools: ["Flask", "FastAPI", "Django", "REST APIs", "GraphQL", "Postman"],
    description: "Creating robust backends and scalable web services"
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-8 h-8" />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    borderColor: "border-cyan-200 dark:border-cyan-800/50",
    proficiency: 82,
    tools: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "Docker"],
    description: "Managing data storage and cloud infrastructure"
  },
  {
    category: "Development Tools",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-gray-600 to-slate-700",
    bgColor: "bg-gray-50 dark:bg-gray-900/30",
    borderColor: "border-gray-200 dark:border-gray-700/50",
    proficiency: 90,
    tools: ["Git", "GitHub", "VS Code", "Jupyter", "Linux", "Terminal"],
    description: "Essential tools for efficient development workflow"
  }
];

const ProgressBar = ({ percentage, color, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1200 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const SkillCard = ({ skill, index, isVisible }) => {
  return (
    <div 
      className={`group relative ${skill.bgColor} ${skill.borderColor} border rounded-xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] hover:-translate-y-1 transform backdrop-blur-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      {/* Icon */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
        {skill.icon}
      </div>

      {/* Category Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {skill.category}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {skill.description}
      </p>

      {/* Proficiency */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proficiency</span>
          <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`}>
            {skill.proficiency}%
          </span>
        </div>
        <ProgressBar percentage={skill.proficiency} color={skill.color} isVisible={isVisible} />
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Tools & Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {skill.tools.map((tool, toolIndex) => (
            <span
              key={toolIndex}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle hover glow */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-r ${skill.color} transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
};

const Skills = () => {
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

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building intelligent solutions, from data analysis to production-ready applications
          </p>
          
          {/* Simple decorative line */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-index={index}
            >
              <SkillCard 
                skill={skill} 
                index={index} 
                isVisible={visibleCards.has(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom section - simplified */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Continuously learning and growing in the ever-evolving tech landscape
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Code size={16} />
              Always Learning
            </div>
            <div className="flex items-center gap-2 px-6 py-2 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors duration-300">
              <Users size={16} />
              Open to Collaborate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;