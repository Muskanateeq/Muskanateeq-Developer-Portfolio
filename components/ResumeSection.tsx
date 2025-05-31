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
  { name: "HTML", level: 98 },
  { name: "CSS", level: 95 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 90 },
  { name: "UI,UX designer", level: 95 },
  { name: "Docker", level: 40 },
  { name: "Python", level: 95 },
  { name: "Data Analyst", level: 62 },
  { name: "Machine Learning", level: 60 },
  { name: "Deep Learning", level: 50 },
  { name: "Computer Vision", level: 40 },
  { name: "Generative AI", level: 30 },
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
            <p className="text-sm">Modern AI Web Developer</p>
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
            I&apos;m a Modern AI & Web Developer with a passion for combining the power of web technologies with artificial intelligence to build intelligent, interactive, and efficient applications.
            I have hands-on experience in front-end development using HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, and Sanity CMS, with a strong focus on creating clean UIs, responsive layouts, and smooth user experiences.
            In the field of AI and Data, I have learned Machine Learning, Deep Learning, Computer Vision, and basics of Generative AI. I&apos;m also skilled in data cleaning, preprocessing, and data analysis, which are essential for training accurate and effective AI models.With a commitment to continuous learning and practical implementation, I aim to bridge the gap between AI and modern web development by creating innovative, smart web solutions.
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
              <p>Specializing in Artificial Intelligence</p>
              <p>2024-2025</p>
              <p>Diploma in Agentic AI</p>
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
                  <div key={skill.name} className="w-16 mx-2 mt-3">
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
            <h2 className='text-lg mb-1'>Senior Trainer – Governor Sindh Initiative for AI, Web3.0 & Metaverse Institute </h2>
            <p className="text-sm mt-2">
            During my specialization at the Governor Sindh Initiative for AI, Web3.0 & Metaverse Institute, I was assigned as a Senior Trainer. In this role, I led comprehensive training sessions for junior team members, developing and delivering targeted programs on the Modern Web Development technology. I not only shared my technical expertise but also mentored and guided my peers to enhance their skills, ensuring they were well-prepared to meet the challenges of a rapidly evolving digital landscape.
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
            <p>📞 03152068370</p>
            <p>📧 muskan.in.com786@gmail.com</p>
            <p>🏠 Sadder, Sector 2-D House 481, Karachi, Pakistan</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

