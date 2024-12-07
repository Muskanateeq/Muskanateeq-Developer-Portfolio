"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion"; // Import motion

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 60 },
  { name: "Next.js", level: 80 },
  { name: "UI,UX designer", level: 95 },
  { name: "Docker", level: 40 },
  { name: "Python", level: 90 },
  { name: "Data Analyst", level: 92 },
  { name: "Machine Learning", level: 80 },
];

export default function ResumeSection() {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center px-4 md:px-14">
      <motion.div
        className="bg-white shadow-lg rounded-lg max-w-3xl w-full flex flex-col md:flex-row mt-24 mb-11"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section (Profile, Education) */}
        <div className="bg-gray-800 text-white w-full md:w-1/3 p-6 flex flex-col justify-between rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          <div className="text-center">
            <div className="w-[115px] h-[100px] rounded-[50%] border-4 border-white-400 overflow-hidden mx-auto">
              <Image
                src="/ResumeSection/Profile.img.png"
                alt="Profile Picture"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>
            <h2 className="text-teal-400 mt-4 text-xl font-bold">Muskan Ateeq</h2>
            <p className="text-sm">Frontend Developer</p>
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-teal-400 text-lg font-semibold text-center">PROFILE:</h3>
            <div className="h-px bg-white my-2"></div>
            <p className="text-xs font-light leading-tight text-center">
            I&apos;m a skilled Frontend developer with hands-on experience in creating visually appealing and user-friendly web applications. My expertise includes HTML, CSS, JavaScript, and TypeScript, with a strong focus on innovative frameworks like Next.js. Alongside these, I am also proficient in Python, data analysis, and machine learning, which allow me to approach projects with a versatile and data-driven perspective. I have a proven track record of designing responsive layouts and implementing interactive features to enhance the user experience. With a keen eye for detail and a commitment to staying updated with the latest web technologies, I am dedicated to delivering high-quality solutions that meet both user needs and business objectives.
            </p>
          </motion.div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-teal-400 text-lg font-semibold text-center">EDUCATION:</h3>
            <div className="h-px bg-white my-2"></div>
            <div className='text-xs font-light leading-tight text-center'>
            <p>Matric</p>
              <p>2018-2020</p>
              <p>Intermediate</p>
              <p>2021-2023</p>
              <p>Specializing in Generative AI</p>
              <p>2023-till in process</p>
              <p>Exploring AI-data science</p>
              <p>2024-till in process</p>
            </div>
          </motion.div>
        </div>

        {/* Right Section (Skills, Experience, Contact) */}
        <motion.div
          className="text-black w-full md:w-2/3 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">SKILLS:</h3>
            <button
              className="bg-gray-700 text-white px-4 py-1 rounded hover:bg-gray-900"
              onClick={() => setShowSkills(!showSkills)}
            >
              {showSkills ? "Hide Skills" : "Show Skills"}
            </button>
          </div>

          {showSkills && (
            <div className="flex flex-wrap justify-center items-center mt-4 space-y-4 md:space-y-0">
              {/* First four skills in a row */}
              <div className="flex flex-wrap justify-center w-full md:w-[90%] max-w-[400px] mt-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="w-20 mx-2 mt-3">
                    <CircularProgressbar
                      value={skill.level}
                      text={`${skill.level}%`}
                      styles={buildStyles({
                        pathColor: "#2dd4bf",
                        textColor: "#38b2ac",
                        trailColor: "#4b5563",
                        textSize: "16px",
                      })}
                    />
                    <p className="text-center text-sm mt-2">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          <motion.div
            className="text-black mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold">EXPERIENCE:</h3>
            <h2 className='text-lg mb-1'>Feb 2024 - Oct 2024 (Teaching) | At Aptech Learning Institute</h2>
            <p className="text-sm mt-2">
            Taught foundational and advanced concepts in frontend development, including HTML, CSS, JavaScript, and frameworks. Provided hands-on guidance to students in building responsive and user-friendly web applications to help them improve their practical coding skills. Assisted in updating teaching materials and projects to align with students learning needs and market demands.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-black mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-lg font-semibold">CONTACT:</h3>
            <p>📞 03302974589 | 03152068370</p>
            <p>📧 ateeq.in.com@gmail.com</p>
            <p>🏠 Sadder, Sector 2-D House 481, Karachi, Pakistan</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

