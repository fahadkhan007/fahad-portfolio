// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="mb-10 text-center text-gray-700 dark:text-gray-300 space-y-2">
          <p>Email: <span className="font-medium text-blue-600 dark:text-blue-400">fahad@example.com</span></p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Bhopal, India</p>
        </div>

        {/* Contact Form */}
        <form className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
