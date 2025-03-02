
"use client"; 
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; 

const Stats = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [technologies, setTechnologies] = useState(0);
  const [commits, setCommits] = useState(0);

  useEffect(() => {
    const yearsTimer = setInterval(() => {
      setYears((prev) => (prev < 3 ? prev + 1 : 3));
    }, 500);

    const projectsTimer = setInterval(() => {
      setProjects((prev) => (prev < 24 ? prev + 1 : 24));
    }, 100);

    const technologiesTimer = setInterval(() => {
      setTechnologies((prev) => (prev < 11 ? prev + 1 : 11));
    }, 210);

    const commitsTimer = setInterval(() => {
      setCommits((prev) => (prev < 499 ? prev + 12 : 499));
    }, 100);

    return () => {
      clearInterval(yearsTimer);
      clearInterval(projectsTimer);
      clearInterval(technologiesTimer);
      clearInterval(commitsTimer);
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
        <h2 className="text-4xl font-bold text-teal-400">{years}</h2>
        <p>Months of experience</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{projects}</h2>
        <p>Projects completed</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{technologies}</h2>
        <p>Technologies mastered</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">{commits}</h2>
        <p>Code commits</p>
      </motion.div>
    </div>
  );
};

export default Stats;

