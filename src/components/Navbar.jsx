import { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Certifications", "Projects", "Contact"];

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  // Handle dark mode toggle
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offsets = navItems.map((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (!el) return { section, top: 0 };
        return { section, top: el.offsetTop - 120 };
      });

      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i].top) {
          setActiveSection(offsets[i].section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveSection(item);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#0f0f0f]/70 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Profile Photo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          {/* Profile Photo */}
          <div className="relative">
            <img
              src="/profile-photo.jpg" // Add your photo to the public folder
              alt="Fahad Khan"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-400 transition-all duration-300 group-hover:border-blue-400 dark:group-hover:border-blue-300 group-hover:scale-110"
            />
            {/* Optional: Add a subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </div>
          
          {/* Name */}
          <span className="text-3xl font-bold font-signature bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-600 text-transparent bg-clip-text tracking-wide transition-all duration-300 group-hover:scale-105">
            Fahad
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 font-medium text-gray-700 dark:text-gray-300 text-[15px]">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`px-3 py-1.5 rounded-xl transition-all duration-200 transform ${
                  activeSection === item
                    ? "bg-blue-100 dark:bg-white/10 text-blue-600 dark:text-blue-400 font-semibold scale-105"
                    : "hover:text-blue-500 hover:scale-105"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons */}
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 md:space-x-4">
          <button onClick={toggleTheme} className="hover:text-blue-500 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <Linkedin size={20} />
          </a>
          <a href="mailto:fahad@example.com" className="hover:text-blue-500 transition">
            <Mail size={20} />
          </a>

          {/* Hamburger menu */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden hover:text-blue-500 transition">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-white dark:bg-[#111] border-t border-gray-200 dark:border-gray-700">
          <ul className="space-y-2 font-medium text-gray-700 dark:text-gray-300">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavClick(item)}
                  className={`block px-4 py-2 rounded-xl transition-all duration-200 ${
                    activeSection === item
                      ? "bg-blue-100 dark:bg-white/10 text-blue-600 dark:text-blue-400 font-semibold scale-[1.02]"
                      : "hover:text-blue-500 hover:scale-105"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;