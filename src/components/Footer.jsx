// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 text-center">
      <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
        Built by <span className="font-semibold text-blue-600 dark:text-blue-400">Fahad Khan</span>
      </div>

      <div className="flex justify-center space-x-4 text-gray-500 dark:text-gray-400 mb-2">
        <a href="#" className="hover:text-blue-500 transition">GitHub</a>
        <a href="#" className="hover:text-blue-500 transition">LinkedIn</a>
        <a href="#" className="hover:text-blue-500 transition">Instagram</a>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Fahad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
