"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [focusName, setFocusName] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusService, setFocusService] = useState(false);
  const [focusMessage, setFocusMessage] = useState(false);

  const [hoveredPhone, setHoveredPhone] = useState(false);
  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [hoveredAddress, setHoveredAddress] = useState(false);

  return (
    <section className="w-full min-h-screen bg-gray-900 flex flex-col items-center p-0 m-0">
      {/* New Top Center Heading with Animation */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white py-10 px-6 space-y-10 md:space-y-0 md:space-x-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Contact Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-teal-400">
            Let&apos;s work together
          </h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <form className="mt-4 space-y-4">
            <div className="flex space-x-4">
              <motion.input
                type="text"
                placeholder="Name"
                required
                className={`w-full bg-gray-700 p-2 rounded-md text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                  focusName ? "ring-2 ring-teal-400" : ""
                }`}
                onFocus={() => setFocusName(true)}
                onBlur={() => setFocusName(false)}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="text"
                placeholder="Phone number"
                required
                className={`w-full bg-gray-700 p-2 rounded-md text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                  focusPhone ? "ring-2 ring-teal-400" : ""
                }`}
                onFocus={() => setFocusPhone(true)}
                onBlur={() => setFocusPhone(false)}
                whileFocus={{ scale: 1.05 }}
              />
            </div>
            <div className="flex space-x-4">
              <motion.input
                type="email"
                placeholder="Email address"
                required
                className={`w-full bg-gray-700 p-2 rounded-md text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                  focusEmail ? "ring-2 ring-teal-400" : ""
                }`}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                whileFocus={{ scale: 1.05 }}
              />
              <motion.select
                required
                className={`w-full bg-gray-700 p-2 rounded-md text-white focus:outline-none transition-all duration-300 ${
                  focusService ? "ring-2 ring-teal-400" : ""
                }`}
                onFocus={() => setFocusService(true)}
                onBlur={() => setFocusService(false)}
                whileFocus={{ scale: 1.05 }}
              >
                <option value="">Select a service</option>
                <option>Service 1 (Frontend Development)</option>
                <option>Service 2 (Modern Web Development)</option>
                <option>Service 3 (UI/UX Designing)</option>
                <option>Service 6 (Logo Designing)</option>
              </motion.select>
            </div>
            <motion.textarea
              placeholder="Type your message here."
              required
              className={`w-full bg-gray-700 p-2 rounded-md text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                focusMessage ? "ring-2 ring-teal-400" : ""
              }`}
              rows={4}
              onFocus={() => setFocusMessage(true)}
              onBlur={() => setFocusMessage(false)}
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              className="w-full bg-teal-400 text-gray-900 p-2 rounded-md font-semibold hover:bg-teal-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <div className="space-y-6 w-full md:w-1/2 cursor-pointer">
          <div
            className={`flex items-center space-x-4 hover:text-teal-400 transition-transform duration-300 ${
              hoveredPhone ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredPhone(true)}
            onMouseLeave={() => setHoveredPhone(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2l.4 2M7 5l1.6 7.5L9.6 12l4.8-4.8m0 0L19 5h2m-2 6.4L16 14m-4 4v2m-2-2h2v2h2v-2h2v-2H9v2z"
              />
            </svg>
            <div>
              <p className="font-semibold">Phone</p>
              <p>📞(+92) 3152068370 | (+92) 3302974589</p>
            </div>
          </div>
          <div
            className={`flex items-center space-x-4 hover:text-teal-400 transition-transform duration-300 ${
              hoveredEmail ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredEmail(true)}
            onMouseLeave={() => setHoveredEmail(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12l-4-4-4 4m4-4v12"
              />
            </svg>
            <div>
              <p className="font-semibold">Email</p>
              <p>📧ateeq.in.com@gmail.com</p>
            </div>
          </div>
          <div
            className={`flex items-center space-x-4 hover:text-teal-400 transition-transform duration-300 ${
              hoveredAddress ? "scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredAddress(true)}
            onMouseLeave={() => setHoveredAddress(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12l4 4m0 0l-4 4m4-4H8"
              />
            </svg>
            <div>
              <p className="font-semibold">Address</p>
              <p>🏠Sader, Sector 2-D House 481, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
