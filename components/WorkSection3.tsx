"use client";
import { useState } from "react"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from "next/image";
import { motion } from 'framer-motion';



export default function ProjectSection() {
  const [showDescription, setShowDescription] = useState(false);
  
  return (
    <section className="bg-gray-900 text-white min-h-screen py-24 px-4 md:px-8 lg:px-16">
      <motion.div 
        className="bg-gray-800 pr-16 pl-16 pt-7 pb-7 mx-4 md:mx-10 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Data Analyst
        </motion.h1>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 md:mt-12 space-y-8 md:space-y-0">
          {/* Project Details */}
          <motion.div 
            className="flex-1 text-center md:text-left px-4 md:px-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-teal-400">01</h2>
            <h3 className="text-2xl font-semibold mt-2">Supermarket Insights</h3>

            {/* Description with Toggle */}
            {showDescription && (
              <p className="text-gray-400 mt-4 leading-relaxed text-start">Analyzed a supermarket dataset to identify top-selling products in each branch and highlight branches with varying customer ratios. Insights will guide strategies to boost customer engagement in lower-performing branches and improve overall sales.</p>
            )}
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="mt-2 text-teal-400 underline"
            >
              {showDescription ? "See Less" : "See More"}
            </button>

            <p className="mt-4 text-teal-400 font-semibold">Python, Matplotlip, Seaborn, Numpy, Pandas</p>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              <motion.a
                href="https://colab.research.google.com/drive/1TmVZHLhMlxVG_L3XHfXYczKzdr2eMT1x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="External link"
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt className="text-white" />
              </motion.a>
              <motion.a
                href="https://github.com/Muskanateeq/EDA-Super-Market-Analysis/blob/main/EDA_Super_Market_Analysis.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="GitHub link"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* Project Image and Navigation */}
          <motion.div 
            className="flex-1 relative h-72 w-full max-w-md mx-auto md:mx-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="https://colab.research.google.com/drive/1TmVZHLhMlxVG_L3XHfXYczKzdr2eMT1x" target="_blank" rel="noopener noreferrer">
            <Image
              src="/WorkSection3/Thumbnail1.png"
              alt="Project thumbnail"
              className="rounded-lg w-full h-full object-cover shadow-lg"
              width={7000}
              height={9000}
            />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};