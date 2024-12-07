"use client";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  const projects = [
    {
      id: "01",
      title: "Amazon Clone",
      description: "Developed an Amazon clone to showcase my web development skills and understanding of e-commerce platforms.",
      tech: "Html 5, Css 3",
      image: "/WorkSection2/Thumbnail1.png",
      githubLink: "https://github.com/Muskanateeq/Amazon-Website-Clone",
      vercelLink: "https://amazon-website-clone-eosin.vercel.app/"
    },
    {
      id: "02",
      title: "Food Delivery Website",
      description: "Created a responsive food delivery website featuring an intuitive interface for users to browse menus, and place orders. This project showcases my front-end web development skills and commitment to delivering an excellent user experience.",
      tech: "Html 5, Css 3",
      image: "/WorkSection2/Thumbnail2.png",
      githubLink: "https://github.com/Muskanateeq/Food-Delivery-Website",
      vercelLink: "https://food-delivery-website-lyart-nu.vercel.app/?vercelToolbarCode=V444PSdRRk2wnjH"
    },
    {
      id: "03",
      title: "Netflix Clone",
      description: "Created a Netflix clone that allows users to browse and stream movies and TV shows, featuring a user-friendly interface and responsive design.",
      tech: "Html 5, Css 3",
      image: "/WorkSection2/Thumbnail3.png",
      githubLink: "https://github.com/Muskanateeq/Netflix-website",
      vercelLink: "https://netflix-website-92rx-muskanateeqs-projects.vercel.app/"
    },
    {
      id: "04",
      title: "E-Commerce Website",
      description: "Created an e-commerce website. This project showcases my web development skills , with a focus on responsive design for a seamless user experience.",
      tech: "Html 5, Css 3",
      image: "/WorkSection2/Thumbnail4.png",
      githubLink: "https://github.com/Muskanateeq/Simple-E-Commerce-Website",
      vercelLink: "https://e-commerce-website-tan-six.vercel.app/"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

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
          Frontend Development
        </motion.h1>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 md:mt-12 space-y-8 md:space-y-0">
          {/* Project Details */}
          <motion.div 
            className="flex-1 text-center md:text-left px-4 md:px-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-teal-400">{currentProject.id}</h2>
            <h3 className="text-2xl font-semibold mt-2">{currentProject.title}</h3>
            
            {/* Description with Toggle */}
            {showDescription && (
              <p className="text-gray-400 mt-4 leading-relaxed text-start">{currentProject.description}</p>
            )}
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="mt-2 text-teal-400 underline"
            >
              {showDescription ? "See Less" : "See More"}
            </button>
            
            <p className="mt-4 text-teal-400 font-semibold">{currentProject.tech}</p>
            <div className="flex justify-center md:justify-start mt-6 space-x-4">
              <motion.a
                href={currentProject.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                aria-label="External link"
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt className="text-white" />
              </motion.a>
              <motion.a
                href={currentProject.githubLink}
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
          <a href={currentProject.vercelLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={currentProject.image}
              alt="Project thumbnail"
              className="rounded-lg w-full h-full object-cover shadow-lg"
              width={7000}
              height={9000}
            />
            </a>
            <div className="flex absolute bottom-4 right-4 space-x-2">
              <motion.button
                onClick={handlePrevious}
                className="w-8 h-8 bg-teal-400 flex items-center justify-center text-gray-900 hover:bg-teal-300"
                whileTap={{ scale: 0.9 }}
              >
                &lt;
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="w-8 h-8 bg-teal-400 flex items-center justify-center text-gray-900 hover:bg-teal-300"
                whileTap={{ scale: 0.9 }}
              >
                &gt;
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
