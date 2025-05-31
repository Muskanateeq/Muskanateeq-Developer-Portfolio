"use client"; 
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 

const Stats = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [clients, setClients] = useState(0); // Changed from commits to clients

  useEffect(() => {
    const yearsTimer = setInterval(() => {
      setYears((prev) => (prev < 1 ? prev + 1 : 1));
    }, 500);

    const projectsTimer = setInterval(() => {
      setProjects((prev) => (prev < 24 ? prev + 1 : 24));
    }, 100);

    const technologiesTimer = setInterval(() => {
      setTechnologies((prev) => (prev < 15 ? prev + 1 : 15));
    }, 210);

    const clientsTimer = setInterval(() => {
      setClients((prev) => (prev < 12 ? prev + 1 : 12)); // Counting up to 12 clients
    }, 150);

    return () => {
      clearInterval(yearsTimer);
      clearInterval(projectsTimer);
      clearInterval(technologiesTimer);
      clearInterval(clientsTimer);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 justify-items-center mt-10 px-4 md:px-0 pb-10 md:pb-0">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400 flex items-center justify-center">
          {years}<span className="text-xl ml-1">+</span>
        </h2>
        <p>Years of experience</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400 flex items-center justify-center">
          {projects}<span className="text-xl ml-1">+</span>
        </h2>
        <p>Projects completed</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400 flex items-center justify-center">
          {technologies}<span className="text-xl ml-1">+</span>
        </h2>
        <p>Technologies mastered</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400 flex items-center justify-center">
          {clients}<span className="text-xl ml-1">+</span>
        </h2>
        <p>Satisfied clients</p>
      </motion.div>
    </div>
  );
};

export default Stats;