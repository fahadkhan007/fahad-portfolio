import { useEffect, useState } from "react";
import { MapPin, Download, ChevronDown } from "lucide-react";

const phrases = [
"A Computer Science student with a passion for data science, Machine learning and API development. I craft intelligent solutions using data, machine learning, and sleek APIs."
];

const Hero = () => {
  const [text, setText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[loopIndex % phrases.length];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 35);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, loopIndex]);

  const [projects, setProjects] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    const animateCount = (target, setter) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        setter(count);
        if (count >= target) clearInterval(interval);
      }, 40);
    };
    animateCount(10, setProjects);
    animateCount(6, setCertifications);
    animateCount(12, setSkills);
  }, []);

  return (
    <section
      id="home"
className="relative min-h-screen flex items-start justify-center pt-28 sm:pt-48 pb-20 sm:pb-28 overflow-hidden transition-colors duration-300
  bg-hero-gradient bg-[length:200%_200%] animate-gradient-x
  dark:bg-gradient-to-br dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a]">     {/* Glows */}
      <div className="absolute -top-48 -left-44 w-[350px] h-[350px] bg-blue-100 dark:bg-blue-900 opacity-25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-60px] right-[-40px] w-[280px] h-[280px] bg-blue-200 dark:bg-blue-800 opacity-20 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl px-6 text-center z-10">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 animate-fade-in-down tracking-tight text-gray-900 dark:text-white">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Fahad Khan</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl mb-2 font-semibold text-gray-600 dark:text-gray-300 animate-fade-in-down delay-100">
          Data Scientist, ML Developer, API/Backend
        </h2>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 animate-fade-in-down delay-200">
          <MapPin size={16} />
          Jalandhar, India
        </div>

        {/* Typewriter Line */}
        <div className="text-lg sm:text-lg max-w-2xl mx-auto min-h-[4.5rem] text-gray-700 dark:text-gray-200 animate-fade-in-down delay-300 leading-relaxed">
  {text}
  <span className="animate-pulse">|</span>
</div>


        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center animate-fade-in-down delay-500">
          <a
            href="#projects"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.3)] hover:scale-105 transition duration-300 ease-in-out"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:text-white transition duration-300 hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.25)] hover:scale-105"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-10 flex gap-10 justify-center animate-fade-in-down delay-700 text-center text-sm sm:text-base">
          <div>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{projects}+</p>
            <p className="text-gray-600 dark:text-gray-400">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">{certifications}+</p>
            <p className="text-gray-600 dark:text-gray-400">Certifications</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{skills}+</p>
            <p className="text-gray-600 dark:text-gray-400">Skills</p>
          </div>
        </div>

        {/* Floating Down Arrow + Know More */}
        <div className="mt-12 flex flex-col items-center animate-fade-in-up delay-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Know more</p>
          <a href="#about" className="text-blue-600 dark:text-blue-400 animate-bounce">
            <ChevronDown size={28} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
